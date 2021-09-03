const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/ping', (_req, res) => {
  res.status(200).json({ 'message': 'pong!'})
})

const PORT = '3000';

app.listen(PORT, () => {
  console.log('online');
})