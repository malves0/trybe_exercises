const readlineSync = require('readline-sync');

const distancia = readlineSync.questionInt('Qual a distância(metros)? ');
const tempo = readlineSync.questionInt('Qual o tempo(segundos)? ');

function calculaVelocidadeMedia(distancia, tempo) {
  const media = distancia / tempo;
  console.log(`A velocidade média é: ${media} m/s`);
}

calculaVelocidadeMedia(distancia, tempo);
