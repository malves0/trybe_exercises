const fs = require('fs').promises; // realiza leitura de arquivos

function readAll(){
  fs.readFile('./simpsons.json', 'utf-8')
    .then((res) => {
      return JSON.parse(res)
   })
    .then((simpsons) => {
      return console.log(simpsons
        .map(({ id, name }) => `${id} - ${ name}`))
    });
}