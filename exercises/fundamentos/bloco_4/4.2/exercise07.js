//Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maxNumber = 0; minNumber = 0;

for(let index = 0; index < numbers.length; index = index + 1){
    if(numbers[index] > maxNumber){
        maxNumber = numbers[index];
    }
}
minNumber = maxNumber

for(let index = 0; index < numbers.length; index = index + 1){
    if(numbers[index] < minNumber){
        minNumber = numbers[index];
    }
}

console.log('O menor número é:' + minNumber);
