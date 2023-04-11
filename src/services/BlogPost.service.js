const { verifyToken } = require('../middlewares/Auth');
const { BlogPost, PostCategory } = require('../models');

const createBlogPost = async (title, content, categoryIds, authorization) => {
  const categIds = categoryIds;
  const { id } = verifyToken(authorization);
  const newPost = await BlogPost.create({ title, content, userId: id });

  await Promise.all(categIds.map((categ) => PostCategory
  .create({ postId: newPost.id, categoryId: categ })));
  return { statusCode: 201, response: newPost };
};

module.exports = {
  createBlogPost,
};