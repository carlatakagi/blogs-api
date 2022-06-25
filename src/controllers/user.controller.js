const userService = require('../services/user.service');
const { generateJWTToken } = require('../utils/jwt');

const createUser = async (request, response) => {
  const user = await userService.createUser(request.body);

  const token = generateJWTToken(user.dataValues);

  return response.status(201).json({ token });
};

module.exports = { createUser };