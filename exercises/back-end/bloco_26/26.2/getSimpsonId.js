const fs = require('fs').promises; 

function getSimpsonId(id) {
  fs.readFile('./simpsons.json', 'utf-8')
    .then((res) => JSON.parse(res))
    .then((simpsons) => simpsons
      .find((simp) => parseInt(simp.id) === id))
    .then((person) => console.log(person))
}

module.exports = { getSimpsonId };