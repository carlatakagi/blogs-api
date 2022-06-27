const { BlogPost, Category, User } = require('../database/models');

// terminar req 12
const createBlogPost = async () => {
/*   const blogPostCreated = await Category.
 */ };

const getAllBlogPosts = async () => {
  const foundedBlogPosts = await BlogPost.findAll({
    include: [
      {
        model: User, as: 'user', attributes: { exclude: ['password'] },
      },
      {
        model: Category, as: 'categories', through: { attributes: [] },
      },
    ],
  });

  return foundedBlogPosts;
};

const getById = async (id) => {
  const postById = await BlogPost.findOne({
    include: [
      {
        model: User, as: 'user', attributes: { exclude: ['password'] },
      },
      {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
        where: { id },
      },
    ],
  });

  return postById;
};

module.exports = {
  createBlogPost,
  getAllBlogPosts,
  getById,
};