const fs = require('fs/promises');

function setSimpsons (newSimpsons) {
  return fs.writeFile('../simpsons.json', JSON.stringify(newSimpsons));
}

module.exports = { setSimpsons };