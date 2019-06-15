import express from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import cors from "cors";
import routes from './src/'
import errorHandlers from './handlers/errorHandlers'


const app = express()

const port = 4444

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())

app.listen(port, () => {
  console.log("We are live on port 4444")
  console.log(process.env.MAIL_HOST)
})

// I am using routes to allow for scaling of this boilerplate!
app.use('/', routes);

// If that above routes didnt work, we 404 them and forward to error handler
app.use(errorHandlers.notFound);