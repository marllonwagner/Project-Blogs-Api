const { User } = require('../models');
const { tokenGenerate } = require('../middlewares/Auth');

const userLogin = async (email, password) => {
  const reponse = await User.findOne({ where: { email, password } });
  if (email === '' || password === '') {
    return ({ message: 'Some required fields are missing' });
  }
  if (!reponse) {
 return ({
    message: 'Invalid fields',
  });
}
const token = tokenGenerate(reponse.displayName, reponse.email, reponse.id);
return ({ token });
};

module.exports = {
  userLogin,
};