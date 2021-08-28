const readlineSync = require('readline-sync');

function sortNumAleatorio() {
  const numEscolhido = readlineSync.questionInt('Informe um número inteiro entre 0 e 10: ');
  const numSorteado = Math.round(Math.random() * (10 - 0) + 0);

  numSorteado === numEscolhido 
    ? console.log("Parabéns, número correto!")
    : console.log(`Opa, não foi dessa vez. O número era ${numSorteado}`);

  repeatGame();
}

function repeatGame() {
  const repeat = readlineSync.question('Deseja jogar novamente? Responda com S para sim ou N para não: ');
  if(repeat.toUpperCase() === "S") return sortNumAleatorio()
}

sortNumAleatorio();


