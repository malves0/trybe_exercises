//Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sumnumber = 0;
for(let index = 0; index < numbers.length; index = index + 1){
    sumnumber += numbers[index];
}
console.log(sumnumber);
