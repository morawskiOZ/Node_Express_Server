"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
// HomePage, any request that does not match aboves (react router ready)
router.get("/", mainController.homePage);
exports.default = router;
//# sourceMappingURL=index.js.map