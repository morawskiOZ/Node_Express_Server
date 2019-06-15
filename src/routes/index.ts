const express = require('express');
const router = express.Router();


const mainController = require('../controllers/mainController');

// HomePage

router.get('/', mainController.homePage);

// API

router.post("/api/v1", mainController.sendMail );

export default router
