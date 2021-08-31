const fs = require('fs').promises; 

async function getSimpsonId(id) {
  const simps = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((res) => JSON.parse(res))

  const chosenSimp = simps.find((simp) => parseInt(simp.id) === id);
   
  if(!chosenSimp) {
    throw new Error('Não encontrado')
  }
  
  return chosenSimp
}
getSimpsonId(11);