const { Category } = require('../database/models');

const createCategory = async ({ name }) => {
  console.log('name service', name);
  const created = await Category.create({ name });
  return created;
};

const getAllCategories = async () => {
  const foundedCategory = await Category.findAll();

  return foundedCategory;
};

module.exports = {
  createCategory,
  getAllCategories,
};