const categoryService = require('../services/category.service');

const createCategory = async (request, response) => {
  const { name } = request.body;
  
  if (!name) {
    return response.status(400).json({
      message: '"name" is required',
    });
  }
  console.log('name category', name);

  const categoryCreated = await categoryService.createCategory({ name });
  console.log(categoryCreated);
  return response.status(201).json(categoryCreated);
};

module.exports = {
  createCategory,
};