const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Middlewares
app.post('/user', (req,res) => {
  
});


const PORT = '3000';

app.listen(PORT, () => {
  console.log('Online');
});