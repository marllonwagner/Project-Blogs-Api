const service = require('../services/UserLogin.service');

const userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const reponse = await service.userLogin(email, password);
    if (reponse.message) return res.status(400).send(reponse);
    return res.status(200).json(reponse);
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  userLogin,
};