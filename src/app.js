const express = require('express');
const { userLogin } = require('./controllers/UserLogin.controller');
const { createUser } = require('./controllers/User.controller');
// const { verifyToken } = require('./middlewares/Auth');
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', userLogin);
app.post('/user', createUser);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
