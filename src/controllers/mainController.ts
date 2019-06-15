import nodemailer from 'nodemailer'

exports.homePage = (req, res) => {
  res.send("Welcome to my api")
};

exports.sendMail =  async (req, res)=>{

  const data = req.body
  console.log(data)
  console.log(process.env.MAIL_HOST)

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    secureConnection: false,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
}as any);

  const check = await transporter.verify(function(error, success) {
    if (error) {
      console.log(error)
    } else {
      console.log("Server is ready to take our messages")
    }
  })

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
      res.send(info.responseCode)
  });
};