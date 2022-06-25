const { User } = require('../database/models');

const emailUserValidation = async (request, response, next) => {
  const { email } = request.body;

  const user = await User.findOne({
    attributes: ['id', 'displayName', 'email', 'image'],
    where: { email },
  });

  if (user) {
    return response.status(409)
      .json({ message: 'User already registered' });
  }

  const regex = /\S+@\S+\.\S+/;
  const regexEmail = regex.test(email);

  if (!regexEmail) {
    return response.status(400).json({
      message: '"email" must be a valid email',
    });
  }

  next();
};

const displayNameAndPasswordValidation = async (request, response, next) => {
  const { displayName, password } = request.body;

  if (displayName.length < 8) {
    return response.status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' });
  }

  if (password.length < 6) {
    return response.status(400).json({
      message: '"password" length must be at least 6 characters long',
    });
  }

  next();
};

module.exports = {
  emailUserValidation,
  displayNameAndPasswordValidation,
};