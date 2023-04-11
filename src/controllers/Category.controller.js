const service = require('../services/Category.service');

const createCateg = async (req, res) => {
  const { name } = req.body;
  try {
    const newName = await service.createCateg(
  name,
    );

    if (newName.message) return res.status(404).send(newName);

    return res.status(201).json(newName);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno' });
  }
};

const getAllCateg = async (_req, res) => {
  try {
    const { statusCode, response } = await service.getAllCateg();
    return res.status(statusCode).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  createCateg,
  getAllCateg,
};