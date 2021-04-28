const express = require('express');
const router = express.Router();

const answerController = require('../controllers/answer_controller');


router.get('/me',answerController.me);

router.get('/add',answerController.add);

router.get('/comment',answerController.comment);

module.exports = router;