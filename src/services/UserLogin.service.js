const { User } = require('../models');
const { tokenGenerate } = require('../middlewares/Auth');

const userLogin = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });
  if (email === '' || password === '') {
    return ({ message: 'Some required fields are missing' });
  }
  if (!user) {
 return ({
    message: 'Invalid fields',
  });
}
const token = tokenGenerate(user.displayName, user.email, user.id);
return ({ token });
};

module.exports = {
  userLogin,
};