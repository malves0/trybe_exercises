const readlineSync = require('readline-sync');
const peso = readlineSync.questionFloat('Qual o seu peso?');
const altura = readlineSync.questionFloat('Qual a sua altura?');

function calculaIMC(peso, altura) {
  const imc = (peso / (Math.pow(altura, 2))).toFixed(2);
  if (imc < 18.5) {
        console.log('Situação: Abaixo do peso (magreza)');
        return;
      }
 
      if (imc >= 18.5 && imc < 25) {
        console.log('Situação: Peso normal');
        return;
      }
 
      if (imc >= 25 && imc < 30) {
        console.log('Situação: Acima do peso (sobrepeso)');
        return;
      }
 
      if (imc >= 30 && imc < 35) {
        console.log('Situação: Obesidade grau I');
        return;
      }
 
      if (imc >= 35 && imc < 40) {
        console.log('Situação: Obesidade grau II');
        return;
      }
};

console.log(calculaIMC(peso, altura))
