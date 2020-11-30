/* Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
Copiar
n = 5

*
**
***
****
*****

*/

let n = 5;
let lin = '';

if (n > 1){
    for(var index = 0; index !== n; index += 1){
        lin = lin + '*';
        console.log(lin)
    }
}
