const { User } = require('../database/models');

const createUser = ({
  displayName, email, password, image,
}) => User.create({ displayName, email, password, image });

const getAllUsers = () => User.findAll({
    attributes: { exclude: ['password'] },
});

const getById = async (id) => User.findOne({
    attributes: { exclude: ['password'] },
    where: { id },
});

module.exports = {
  createUser,
  getAllUsers,
  getById,
};