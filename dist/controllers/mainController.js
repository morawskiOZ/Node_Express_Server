"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const nodemailer_1 = __importDefault(require("nodemailer"));
// serving FE
exports.homePage = (req, res) => {
    res.sendFile(path.join(__dirname + `../../../${process.env.FRONT_NAME}/build/index.html`));
};
// Email sendind
exports.sendMail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const transporter = nodemailer_1.default.createTransport({
        host: process.env.MAIL_HOST,
        secureConnection: false,
        port: process.env.MAIL_PORT,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    });
    const check = yield transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
        }
        else {
        }
    });
    var mailOptions = {
        from: process.env.MAIL_SENDER,
        to: process.env.MAIL_DEST,
        subject: "Query",
        text: req.body.name + "\n" + req.body.email + "\n\n" + req.body.message
    };
    // send mail with defined transport object
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        }
        res.send(info.responseCode);
    });
});
//# sourceMappingURL=mainController.js.map