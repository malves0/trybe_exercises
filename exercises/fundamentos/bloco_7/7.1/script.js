/* function testingScope(escopo) { 
    if (escopo === true) { 
      let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      const elseScope = `Não devo ser utilizada fora meu escopo (else)`;
      console.log(elseScope);
    }
  }

  testingScope(true); 

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];
  oddsAndEvens.sort((a, b) => a - b);
  console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente !`); */


let factorial = number => {
    let result = number
    for (let index = number - 1; index > 0; index -= 1 ){
        result *= index;
    }
    return result;
}
console.log(factorial(5));

