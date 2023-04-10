const { User } = require('../models');

const createUser = async (
displayName, 
  email,
  password, 
  image,
) => {
  const newUser = await User.create({ displayName, 
    email,
    password, 
    image });

  if (!newUser) {
    return ({ message: 'Não foi possível criar um novo usuario' });
  }

  return newUser;
};

module.exports = {
  createUser,
};