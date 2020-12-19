/* Agora inverta o lado do triângulo. Por exemplo:
Copiar
n = 5

    *
   **
  ***
 ****
*****

Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, 
imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.*/

let n = 5;
let lineIndex;
let columnIndex;
let symbol = '*';
let inputLine = '';
let inputPosition = n;

for (lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
};






