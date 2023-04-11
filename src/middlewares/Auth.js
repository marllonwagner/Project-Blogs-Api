const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const tokenGenerate = (email, name, id) => {
  const payload = { email, name, id };
  const token = jwt.sign(payload, JWT_SECRET);
  return token;
};

const verifyToken = (token) => {
  try {
   return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return false;
  }
};

const isTokenValid = async (req, res, next) => {
  const token = req.header('authorization');
  if (!token) return res.status(401).json({ message: 'Token not found' });
  const isValidToken = verifyToken(token);
  if (!isValidToken) return res.status(401).json({ message: 'Expired or invalid token' });
  return next();
};

module.exports = {
  tokenGenerate,
  isTokenValid,
  verifyToken,
};