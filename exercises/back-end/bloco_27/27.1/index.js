const express = require('express');
const bodyParser = require('body-parser');

const { validationsUser } = require('./middlewares');
const createNewUser = require('./middlewares/createUser');

const app = express();
app.use(bodyParser.json());

// Middlewares
app.post('/user',
  validationsUser.validateFirstName,
  validationsUser.validateLastName,
  validationsUser.validateEmail,
  validationsUser.validatePassword,
  createNewUser
);

const PORT = '3000';

app.listen(PORT, () => {
  console.log('Online');
});