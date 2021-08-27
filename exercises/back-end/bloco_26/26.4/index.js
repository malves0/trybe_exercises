const express = require('express');
const app = express();

// 1
app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong' })
});

app.listen(3000, function () {
  console.log('App listening on port 3000!!')
});