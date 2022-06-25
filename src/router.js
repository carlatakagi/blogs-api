const express = require('express');

const router = express.Router();

const loginController = require('./controllers/login.controller');
const loginValidation = require('./middlewares/loginValidation');
const userController = require('./controllers/user.controller');
const {
  emailUserValidation,
  displayNameAndPasswordValidation,
} = require('./middlewares/userValidation');
const tokenValidation = require('./middlewares/tokenValidation');

router.post('/login', loginValidation, loginController);
router.post('/user', displayNameAndPasswordValidation,
emailUserValidation, userController.createUser);

router.get('/user', tokenValidation, userController.getUser);
router.get('/user/:id', tokenValidation, userController.getUserById);

module.exports = router;