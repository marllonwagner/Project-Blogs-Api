const { Category } = require('../models');

const isFieldsFilled = (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  if (title === '' || content === '' || categoryIds === '') {
return res.status(400).json({
  message: 'Some required fields are missing',
});
  }
  return next();
};

const getAllCategs = async () => {
  const categs = await Category.findAll();
  const categIds = categs.map((c) => c.id);
  return categIds;
};

const isCategIdValid = async (req, res, next) => {
  const { categoryIds } = req.body;
  const ids = await getAllCategs();
    if (!categoryIds.every((categoryId) => ids.includes(categoryId))) {
      return res.status(400).json({
        message: 'one or more "categoryIds" not found',
      });
  }
  
  return next();
};

module.exports = {
  isFieldsFilled,
  getAllCategs,
  isCategIdValid,
};