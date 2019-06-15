"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const errorHandlers = require('./handlers/errorHandlers');
const app = express_1.default();
const port = 4444;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(cors_1.default());
app.listen(port, () => {
    console.log("We are live on port 4444");
    console.log(process.env.MAIL_HOST);
});
// I am using routes to allow for scaling of this boilerplate!
app.use("/", index_1.default);
// If that above routes didnt work, we 404 them and forward to error handler
app.use(errorHandlers.notFound);
//# sourceMappingURL=index.js.map