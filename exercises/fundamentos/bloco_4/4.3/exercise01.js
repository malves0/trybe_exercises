/*1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado 
feito de asteriscos de lado de tamanho n . Por exemplo:
Copiar
n = 5

*****
*****
*****
*****
*****

*/

let n = 10;
let lin = '';

if (n > 1){
    for(var index = 0; index !== n; index += 1){
        lin = lin + '*';
    }
    for(var cont = n; cont > 0; cont -= 1){
        console.log(lin)
    }
}
