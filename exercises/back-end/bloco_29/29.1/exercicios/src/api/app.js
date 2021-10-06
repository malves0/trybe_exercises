const express = require('express');

const bodyParser = require('body-parser');

const routes = require('../routes');
const { errorMiddleware } = require('../middlewares');

const app = express();

app.use(bodyParser.json());

app.use('/', routes);

app.use(errorMiddleware);

module.exports = app;
