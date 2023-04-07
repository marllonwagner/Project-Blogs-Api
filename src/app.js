const express = require('express');
const { userLogin } = require('./controllers/UserLogin.controller');
const { verifyToken } = require('./middlewares/Auth');
// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', userLogin, verifyToken);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
