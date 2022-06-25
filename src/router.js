const express = require('express');

const router = express.Router();

const loginController = require('./controllers/login.controller');
const loginValidation = require('./middlewares/loginValidation');
const userController = require('./controllers/user.controller');
const { emailUserValidation,
  displayNameAndPasswordValidation } = require('./middlewares/userValidation');

router.post('/login', loginValidation, loginController);
router.post('/user', displayNameAndPasswordValidation,
emailUserValidation, userController.createUser);

module.exports = router;