const blogPostService = require('../services/blogpost.service');

const createBlogPost = async (_request, response) => {
  const blogPostCreated = await blogPostService.createBlogPost();

  return response.status(201).json(blogPostCreated);
};

const getBlogPosts = async (_request, response) => {
  const blogPosts = await blogPostService.getAllBlogPosts();

  return response.status(200).json(blogPosts);
};

const getBlogPostsById = async (request, response) => {
  const { id } = request.params;

  const postById = await blogPostService.getById(id);

  if (!postById) {
    return response.status(404).json({
      message: 'Post does not exist',
    });
  }
  
  return response.status(200).json(postById);
};

module.exports = {
  createBlogPost,
  getBlogPosts,
  getBlogPostsById,
};