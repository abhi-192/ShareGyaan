const express = require('express');
const router = express.Router();

const questionController = require('../controllers/question_controller');

router.get('/all',questionController.all);

module.exports = router;