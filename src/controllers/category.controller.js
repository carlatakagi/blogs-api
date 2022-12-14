const categoryService = require('../services/category.service');

const createCategory = async (request, response) => {
  const { name } = request.body;
  
  if (!name) {
    return response.status(400).json({
      message: '"name" is required',
    });
  }

  const categoryCreated = await categoryService.createCategory({ name });
  
  return response.status(201).json(categoryCreated);
};

const getCategories = async (request, response) => {
  const allCategories = await categoryService.getAllCategories();

  return response.status(200).json(allCategories);
};

module.exports = {
  createCategory,
  getCategories,
};