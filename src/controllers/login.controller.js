const loginService = require('../services/login.service');

const loginController = async (request, response) => {
  const token = await loginService.authLogin(request.body);

  return response.status(200).json(token);
};

module.exports = loginController;