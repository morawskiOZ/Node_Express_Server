"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
// API endpoint for email sending
router.post("/api/v1", mainController.sendMail);
// HomePage, any request that does not match aboves (react router ready)
router.get("/", mainController.homePage);
exports.default = router;
//# sourceMappingURL=index.js.map