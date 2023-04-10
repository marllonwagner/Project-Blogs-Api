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

const getAllCateg = async () => {
  const allCateg = await Category.findAll();
  if (!allCateg.length) {
    return ({ message: 'Nenhuma categoria encontrada' });
  }
  return allCateg;
};

module.exports = {
  createCateg,
  getAllCateg,
};