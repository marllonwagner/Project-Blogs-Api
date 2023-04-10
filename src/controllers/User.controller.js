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

    return res.status(200).json(newUser);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno' });
  }
};

module.exports = {
  createUser,
};