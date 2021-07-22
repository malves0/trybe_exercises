const peso = 80;
const altura = 1.7;

function calculaIMC(peso, altura) {
 const resultado = (peso / (Math.pow(altura, 2))).toFixed(2);
 return resultado
};

console.log(calculaIMC(peso, altura))