const service = require('../services/User.service');

const createUser = async (req, res) => {
  const { displayName, email,
    password, image } = req.body;
  try {
    const newUser = await service.createUser(
      displayName,
      email,
      password,
      image,
    );

    if (newUser.message) return res.status(404).send(newUser);

    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno' });
  }
};

const getAllUsers = async (_req, res) => {
  try {
    const { statusCode, response } = await service.getAllUsers();
    return res.status(statusCode).json(response);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const { statusCode, response } = await service.getUserById(id);
    return res.status(statusCode).json(response);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
};