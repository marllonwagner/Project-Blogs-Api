const { Category } = require('../models');

const createCateg = async (
name,
) => {
  const newName = await Category.create({ name });

  if (!newName) {
    return ({ message: 'Não foi possível criar um novo nome de categoria' });
  }

  return newName;
};

module.exports = {
  createCateg,
};