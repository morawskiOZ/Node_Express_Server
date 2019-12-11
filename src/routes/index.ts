<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
=======
const express = require("express")
const router = express.Router()
const mainController = require("../controllers/mainController")
>>>>>>> 94618ba8d9149a3c8ddb5bb95756f1542503fd65

// HomePage, any request that does not match aboves (react router ready)

router.get("/", mainController.homePage)

export default router
