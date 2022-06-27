const blogPostService = require('../services/blogpost.service');

const createBlogPost = async (_request, response) => {
  const blogPostCreated = await blogPostService.createBlogPost();

  return response.status(201).json(blogPostCreated);
};

const getBlogPosts = async (_request, response) => {
  const blogPosts = await blogPostService.getAllBlogPosts();

  return response.status(200).json(blogPosts);
};

module.exports = {
  createBlogPost,
  getBlogPosts,
};