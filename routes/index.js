const express = require('express');
const router = express.Router();
const homeController = require('../controller/home_controller');

router.get('/',homeController.home);
router.use('/question','./question.js');

module.exports = router;