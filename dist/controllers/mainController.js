var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
exports.homePage = (req, res) => {
    res.send("Welcome to my api");
};
exports.sendMail = (req, res) => __awaiter(this, void 0, void 0, function* () {
    const data = req.body;
    console.log(data);
    console.log(process.env.MAIL_HOST);
    const transporter = nodemailer.createTransport({
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
            console.log("Server is ready to take our messages");
        }
    });
    var mailOptions = {
        from: process.env.MAIL_SENDER,
        to: process.env.MAIL_DEST,
        subject: 'Query',
        text: req.body.name + '\n' +
            req.body.email + '\n\n' +
            req.body.message
    };
    // send mail with defined transport object
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
        res.send(info.responseCode);
    });
    res.json(result);
});
//# sourceMappingURL=mainController.js.map