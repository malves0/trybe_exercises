//. Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". 
//Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sumNumber = 0; averageNumbers = 0;

for(let index = 0; index < numbers.length; index = index + 1){
    sumNumber += numbers[index];
}
averageNumbers = sumNumber / numbers.length;

if (averageNumbers > 20){
    console.log('Valor maior que 20');
}else{
    console.log('Valor menor ou igual a 20');
}
