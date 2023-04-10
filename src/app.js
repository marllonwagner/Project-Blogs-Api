const express = require('express');
const { userLogin } = require('./controllers/UserLogin.controller');
const { createUser, getAllUsers } = require('./controllers/User.controller');
const { isNameValid, isEmailValid, 
  isPasswordValid, isEmailExists } = require('./middlewares/UserValidations');
// const { verifyToken } = require('./middlewares/Auth');
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', userLogin);
app.post('/user', isNameValid, isEmailValid, isEmailExists, isPasswordValid, createUser);
app.get('/user', getAllUsers);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
