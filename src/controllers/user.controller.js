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

const getUserById = async (request, response) => {
  const { id } = request.params;

  const userById = await userService.getById(id);

  if (!userById) {
    return response.status(404).json({
      message: 'User does not exist',
    });
  }
  
  return response.status(200).json(userById);
};

module.exports = { createUser, getUser, getUserById };