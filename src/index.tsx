import express from "express"
import bodyParser from "body-parser"
import nodemailer from "nodemailer"
import cors from "cors"
import { getMaxListeners } from "cluster";
import routes from './routes/index'


const app = express()

const port = 4444

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())

app.listen(port, () => {
  console.log("We are live on port 4444")
})

app.get("/", (req, res) => {
  res.send("Welcome to my api")
})

app.post("/api/v1", async (req, res) => {
  const data = req.body

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
})
