import cors from "cors"
import routes from "./routes/index"
import bodyParser from "body-parser"
import path from "path"
const express = require("express")
const errorHandlers = require("./handlers/errorHandlers")
<<<<<<< HEAD:src/index.tsx
require('dotenv').config()

=======
>>>>>>> f950afd8b02c60a502031a2e45ac2f8c10987f84:src/index.ts

const app = express()

const port = 4444

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())

app.listen(process.env.PORT, () => {
  console.log(process.env.PORT )
})
app.use(
  express.static(path.join(__dirname, "../../piotr_morawski_portfolio/build"))
)
// I am using routes to allow for scaling of this boilerplate!
app.use("/", routes)

// If that above routes didnt work, we 404 them and forward to error handler
app.use(errorHandlers.notFound)
