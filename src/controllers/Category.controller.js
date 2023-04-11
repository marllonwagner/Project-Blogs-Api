const service = require('../services/Category.service');

const createCateg = async (req, res) => {
  const { name } = req.body;
  try {
    const { statusCode, response } = await service.createCateg(
  name,
    );
    return res.status(statusCode).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal Server Error' });
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