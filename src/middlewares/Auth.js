const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const tokenGenerate = (email, name, id) => {
  const payload = { email, name, id };
  const token = jwt.sign(payload, JWT_SECRET);
  return token;
};

const verifyToken = (token) => {
  try {
    const userObj = jwt.verify(token, JWT_SECRET);
    return { isValidToken: true, userObj };
  } catch (error) {
    return false;
  }
};

module.exports = {
  tokenGenerate,
  verifyToken,
};