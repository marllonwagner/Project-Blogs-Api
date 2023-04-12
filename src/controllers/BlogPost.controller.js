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

const getPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const { statusCode, response } = await service.getPostById(id);
    return res.status(statusCode).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const { authorization } = req.headers;
  try {
    const { statusCode, response } = await service.updatePost(id, title, content, authorization);
    return res.status(statusCode).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  createBlogPost,
  getAllPosts,
  getPostById,
  updatePost,
};