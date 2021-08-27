const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
// 1
app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong' })
});

// 2
app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).json({ 'message': `Hello, ${name}`})
});

app.listen(3000, function () {
  console.log('App listening on port 3000!!')
});