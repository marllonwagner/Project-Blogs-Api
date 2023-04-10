const { User } = require('../models');

const getAllEmails = async () => {
  const users = await User.findAll();
  const emails = users.map((u) => u.email);
  return emails;
};

const isNameValid = (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length < 8) {
return res.status(400).json({
  message: '"displayName" length must be at least 8 characters long',
});
  }
  return next();
};

const isEmailValid = (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
return res.status(400).json({
  message: '"email" must be a valid email',
});
  }
  return next();
};

const isEmailExists = async (req, res, next) => {
  const { email } = req.body;
  const allEmails = await getAllEmails();
  for (let index = 0; index < allEmails.length; index += 1) {
    if ((allEmails[index] === email)) {
      return res.status(409).json({
        message: 'User already registered',
      });
    }
  }
  
  return next();
};

const isPasswordValid = (req, res, next) => {
  const { password } = req.body;
  if (password.length < 6) {
return res.status(400).json({
  message: '"password" length must be at least 6 characters long',
});
  }
  return next();
};

module.exports = {
  isNameValid,
  isEmailValid,
  isPasswordValid,
  isEmailExists,
};
