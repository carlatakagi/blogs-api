const userService = require('../services/user.service');
const { generateJWTToken } = require('../utils/jwt');

const createUser = async (request, response) => {
  const { displayName, email, password, image } = request.body;
  const user = await userService.createUser({
    displayName, email, password, image,
  });

  const token = generateJWTToken(user.dataValues);

  return response.status(201).json({ token });
};

const getUser = async (_request, response) => {
  const allUsers = await userService.getAllUsers();

  return response.status(200).json(allUsers);
};

module.exports = { createUser, getUser };