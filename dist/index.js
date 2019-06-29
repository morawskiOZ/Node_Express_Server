"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./routes/index"));
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
const express = require("express");
const errorHandlers = require("./handlers/errorHandlers");
require('dotenv').config();
const app = express();
const port = 4444;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(cors_1.default());
app.listen(process.env.PORT, () => {
    console.log(process.env.PORT);
});
app.use(express.static(path_1.default.join(__dirname, "../../Portfolio/build")));
// I am using routes to allow for scaling of this boilerplate!
app.use("/", index_1.default);
// If that above routes didnt work, we 404 them and forward to error handler
app.use(errorHandlers.notFound);
//# sourceMappingURL=index.js.map