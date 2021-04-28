const express = require('express');
const router = express.Router();

const questionController = require('../controllers/question_controller');

router.get('/all',questionController.all);

router.get('/ask',questionController.ask);

router.get('/me',questionController.me);

module.exports = router;