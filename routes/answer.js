const express = require('express');
const router = express.Router();

const answerController = require('../controllers/answer_controller');


router.get('/me',answerController.me);

router.post('/add',answerController.add);

router.post('/comment',answerController.comment);

module.exports = router;