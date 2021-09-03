const fs = require('fs/promises');

function getSimpsons () {
  return fs.readFile("../simpsons.json", 'utf-8')
    .then(fileContent => JSON.parse(fileContent));
}

module.exports = { getSimpsons };
