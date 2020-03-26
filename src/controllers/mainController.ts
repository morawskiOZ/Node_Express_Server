const path = require("path")
import nodemailer from "nodemailer"

// serving FE
exports.homePage = (req, res) => {
  res.sendFile(
    path.join(__dirname + `../../../${process.env.FRONT_NAME}/build/index.html`)
  )
}

// Email sendind
exports.sendMail = async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    secureConnection: false,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  } as any)

  const check = await transporter.verify(function(error, success) {
    if (error) {
      console.log(error)
    } else {
    }
  })

  var mailOptions = {
    from: process.env.MAIL_SENDER,
    to: process.env.MAIL_DEST,
    subject: "Query",
    text: req.body.name + "\n" + req.body.email + "\n\n" + req.body.message
  }

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      return console.log(error)
    }
    res.send(info.responseCode)
  })
}