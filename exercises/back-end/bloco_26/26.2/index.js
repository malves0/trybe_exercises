function compareNum(num1, num2, num3) {
  return new Promise((resolve, reject) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number')
      reject('Informe apenas números');
    
      const resultado = (num1 + num2) * num3;

      if (resultado < 50 ) {
        return reject('Valor muito baixo');
      }
    
      resolve(resultado);
  })
}

compareNum('1', 0, 10)
  .then(resolve => console.log(resolve))
  .catch( error =>  console.error(error))