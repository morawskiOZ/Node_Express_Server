"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
// HomePage
router.get('/', mainController.homePage);
// API
router.post("/api/v1", mainController.sendMail);
exports.default = router;
//# sourceMappingURL=index.js.map