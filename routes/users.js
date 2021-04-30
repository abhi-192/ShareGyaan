const express = require('express');
const router = express.Router;

const usersController = require('../controllers/users_controller');

const homeController = require('../controllers/home_controller');

router.get('/stats',usersController.stats);

router.get('/answers',usersController.answers);

router.get('/questions',usersController.questions);

router.post('/create-session', { failureRedirect: '/' }, homeController.createSession);

module.exports = router;