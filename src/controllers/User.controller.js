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
    const allUsers = await service.getAllUsers();
    if (allUsers.message) return res.status(404).send(allUsers);

    return res.status(200).json(allUsers);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno' });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await service.getUserById(id, res);
    if (user.message) return res.status(404).send(user);

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno' });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
};