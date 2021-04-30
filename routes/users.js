const express = require('express');
const router = express.Router;

const usersController = require('../controllers/users_controller');

router.get('/stats',usersController.stats);

router.get('/answers',usersController.answers);

router.get('/questions',usersController.questions);

module.exports = router;