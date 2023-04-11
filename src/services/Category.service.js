const { Category } = require('../models');

const createCateg = async (
name,
) => {
  const newName = await Category.create({ name });

  if (!newName) {
    return { statusCode: 404, 
      reponse: { message: 'Não foi possível criar um novo nome de categoria' } }; 
  }

  return { statusCode: 201, response: newName };
};

const getAllCateg = async () => {
  const allCateg = await Category.findAll();
  if (!allCateg.length) {
    return { statusCode: 404, response: { message: 'Nenhuma categoria encontrada' } };
  }
  return { statusCode: 200, response: allCateg };
};

module.exports = {
  createCateg,
  getAllCateg,
};