const { User } = require('../models');
const { tokenGenerate, verifyToken } = require('../middlewares/Auth');

const createUser = async (reqBody) => {
  const newUser = await User.create(reqBody);
  if (!newUser) {
    return { statusCode: 400, response: { message: 'Não foi possível criar um novo usuario' } };
  }
  const token = tokenGenerate(newUser.displayName, newUser.email, newUser.id);
  return { statusCode: 201, response: { token } };
};

const getAllUsers = async () => {
  const allUsers = await User.findAll({
    attributes: { exclude: 'password' },
  });
  if (!allUsers.length) {
 return { statusCode: 404, 
    response: { message: 'Nenhum usuário encontrado' } }; 
}

  return { statusCode: 200, response: allUsers };
};

const getUserById = async (id) => {
  const user = await User.findOne({
    where: { id },
    attributes: { exclude: 'password' },
  });

  if (!user) return { statusCode: 404, response: { message: 'User does not exist' } };
  return { statusCode: 200, response: user };
};

const deleteMe = async (authorization) => {
  const { id } = verifyToken(authorization);
  const findMe = await User
  .findOne({ where: { id } });
  try {
  if (id !== findMe.id) return { statusCode: 401, response: { message: 'Unauthorized user' } };
      await User.destroy({ where: { id: findMe.id } });
      return { statusCode: 204, response: [] };
  } catch (error) {
    console.error(error);
    return { statusCode: 500, response: { message: 'Erro ao atualizar o post' } };
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  deleteMe,
};