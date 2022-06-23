const { User } = require('../database/models');

const loginValidation = async (request, response, next) => {
  const { email, password } = request.body;
  if (!email || !password) {
    return response.status(400).json({ message: 'Some required fields are missing' });
  }

  const user = await User.findOne({
    attributes: ['id', 'displayName', 'email', 'image'],
    where: { email, password },
  });

  if (!user) {
    return response.status(400).json({ message: 'Invalid fields' });
  }

  next();
};

module.exports = loginValidation;