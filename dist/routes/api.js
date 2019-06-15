var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
/* GET api listing. */
router.get('/', function (req, res) {
    res.send('api');
});
router.post('/sendemail', function (req, res) {
    // create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport({
        service: process.env.MAIL_HOST,
        secureConnection: false,
        port: process.env.MAIL_PORT,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    });
    // setup email data with unicode symbols
    var mailOptions = {
        from: req.body.name,
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
});
module.exports = router;
//# sourceMappingURL=api.js.map