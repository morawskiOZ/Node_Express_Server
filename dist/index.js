"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
const port = 4444;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(cors_1.default());
app.listen(port, () => {
    console.log("We are live on port 4444");
    console.log(process.env.MAIL_HOST);
});
app.get("/", (req, res) => {
    console.log("dziala");
    res.send("Welcome to my api");
});
app.post("/api/v1", (req, res) => {
    const data = req.body;
    console.log(data);
    console.log(process.env.MAIL_HOST);
    const smtpTransport = nodemailer_1.default.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: false,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    });
    smtpTransport.verify(function (error, success) {
        if (error) {
            console.log(error);
        }
        else {
            console.log("Server is ready to take our messages");
        }
    });
    var mailOptions = {
        from: data.email,
        to: "ENTER_YOUR_EMAIL",
        subject: "ENTER_YOUR_SUBJECT",
        html: `<p>${data.name}</p>
          <p>${data.email}</p>
          <p>${data.message}</p>`
    };
    smtpTransport.sendMail(mailOptions, (error, response) => {
        if (error) {
            res.send(error);
            console.log("Msg fail");
        }
        else {
            res.send("Success");
            console.log("Msg succ");
        }
        smtpTransport.close();
    });
});
//# sourceMappingURL=index.js.map