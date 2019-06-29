const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

// API

router.post("/api/v1", mainController.sendMail );

// HomePage, any request that does not match aboves (react router ready)

<<<<<<< HEAD
router.get("/", mainController.homePage)
=======
router.get('*', mainController.homePage);

>>>>>>> f950afd8b02c60a502031a2e45ac2f8c10987f84

export default router
