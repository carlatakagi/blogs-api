const express = require('express');

const router = express.Router();

const loginController = require('./controllers/login.controller');
const loginValidation = require('./middlewares/loginValidation');

router.post('/login', loginValidation, loginController);

module.exports = router;