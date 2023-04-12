const service = require('../services/BlogPost.service');

const createBlogPost = async (req, res) => {
  // const { title, content,
  //   categoryIds } = req.body;
  const { authorization } = req.headers;
  const { title, content, categoryIds } = req.body; 
  try {
    const { statusCode, response } = await service.createBlogPost(
title, 
content,
categoryIds, 
authorization,
);
    return res.status(statusCode).json(response);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const getAllPosts = async (_req, res) => {
  try {
    const { statusCode, response } = await service.getAllPosts();
    return res.status(statusCode).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  createBlogPost,
  getAllPosts,
};