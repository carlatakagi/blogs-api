const express = require('express');

const router = express.Router();

const loginController = require('./controllers/login.controller');
const userController = require('./controllers/user.controller');
const categoryController = require('./controllers/category.controller');
const blogPostController = require('./controllers/blogpost.controller');
const loginValidation = require('./middlewares/loginValidation');
const {
  emailUserValidation,
  displayNameAndPasswordValidation,
} = require('./middlewares/userValidation');
const tokenValidation = require('./middlewares/tokenValidation');

router.post('/login', loginValidation, loginController);
router.post('/user', displayNameAndPasswordValidation,
emailUserValidation, userController.createUser);
router.post('/categories', tokenValidation, categoryController.createCategory);
router.post('/post', tokenValidation); // 

router.get('/user', tokenValidation, userController.getUser);
router.get('/user/:id', tokenValidation, userController.getUserById);
router.get('/categories', tokenValidation, categoryController.getCategories);
router.get('/post', tokenValidation, blogPostController.getBlogPosts);

module.exports = router;