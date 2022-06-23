const { User } = require('../database/models');
const { generateJWTToken } = require('../utils/jwt');

const authLogin = async ({ email, password }) => {  
  const user = await User.findOne({
    attributes: ['id', 'displayName', 'email', 'image'],
    where: { email, password },
  });

  const token = generateJWTToken(user.dataValues);
  return { token };
};

module.exports = {
  authLogin,
};