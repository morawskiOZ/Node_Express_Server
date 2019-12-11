<<<<<<< HEAD
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
=======
>>>>>>> 94618ba8d9149a3c8ddb5bb95756f1542503fd65
const path = require("path");
exports.homePage = (req, res) => {
    res.sendFile(path.join(__dirname + `../../../${process.env.FRONT_NAME}/build/index.html`));
};
//# sourceMappingURL=mainController.js.map