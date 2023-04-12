const { verifyToken } = require('../middlewares/Auth');
const { BlogPost, PostCategory, Category, User } = require('../models');

const createBlogPost = async (title, content, categoryIds, authorization) => {
  const categIds = categoryIds;
  const { id } = verifyToken(authorization);
  const newPost = await BlogPost.create({ title, content, userId: id });

  await Promise.all(categIds.map((categ) => PostCategory
  .create({ postId: newPost.id, categoryId: categ })));
  return { statusCode: 201, response: newPost };
};

const getAllPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [{
      model: User,
      as: 'user',
      attributes: { exclude: 'password' },
    },
    { model: Category,
    as: 'categories',
    through: { attributes: [] },
  },
    ],
  });
  console.log(posts[0]);
  return { statusCode: 200, response: posts };
};

const getPostById = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [{
      model: User,
      as: 'user',
      attributes: { exclude: 'password' },
    },
    { model: Category,
    as: 'categories',
    through: { attributes: [] },
  },
    ],
  });
  if (!post) return { statusCode: 404, response: { message: 'Post does not exist' } };
  return { statusCode: 200, response: post };
};

const up1 = async (postId, title, content) => {
  await BlogPost.update(
    { title, content },
    { where: { id: postId } },
  );
};

const updatePost = async (postId, title, content, authorization) => {
  const { id } = verifyToken(authorization);
  try {
    if (id === Number(postId)) {
      await up1(postId, title, content);
      const updatedPost2 = await BlogPost
      .findOne({ where: { id: postId },
  include: [{ model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } }] });
      return { statusCode: 200, response: updatedPost2 };
    } 
      return { statusCode: 401, response: { message: 'Unauthorized user' } };
  } catch (error) {
    console.error(error);
    return { statusCode: 500, response: { message: 'Erro ao atualizar o post' } };
  }
};

module.exports = {
  createBlogPost,
  getAllPosts,
  getPostById,
  updatePost,
};