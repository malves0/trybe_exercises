function compareNum(num1, num2, num3) { // 1
  return new Promise((resolve, reject) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number')
      reject('Informe apenas números');
      const resultado = (num1 + num2) * num3;

      if (resultado < 50 ) {
        return reject('Valor muito baixo');
      }
    
      resolve(resultado)
  })
}

module.exports = { compareNum };