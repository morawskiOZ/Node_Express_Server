import express from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express()

const port = 4444

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())

app.listen(port, () => {
  console.log("We are live on port 4444")
  console.log(process.env.MAIL_HOST)
})

app.get("/", (req, res) => {
  console.log("dziala")
  res.send("Welcome to my api")
})

app.post("/api/v1", (req, res) => {
  const data = req.body
  console.log(data)
  console.log(process.env.MAIL_HOST)
  
  const smtpTransport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  }as any)

  smtpTransport.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
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
  }

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send(error)
      console.log("Msg fail")
    } else {
      res.send("Success")
      console.log("Msg succ")
    }
    smtpTransport.close()
  })
})
