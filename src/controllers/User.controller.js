const service = require('../services/User.service');

const createUser = async (req, res) => {
  // const { displayName, email,
  //   password, image } = req.body;
  const reqBody = { ...req.body };
  try {
    const { statusCode, response } = await service.createUser(reqBody);
    return res.status(statusCode).json(response);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
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

const deleteMe = async (req, res) => {
  const { authorization } = req.headers;
  try {
    const { statusCode, response } = await service.deleteMe(authorization);
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
  deleteMe,
};