const path = require("path");
exports.homePage = (req, res) => {
    res.sendFile(path.join(__dirname + `../../../${process.env.FRONT_NAME}/build/index.html`));
};
//# sourceMappingURL=mainController.js.map