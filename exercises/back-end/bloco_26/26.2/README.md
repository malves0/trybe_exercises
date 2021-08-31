# Node.js - Fluxo Assíncrono

### Tecnologias:

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1024px-Node.js_logo.svg.png" alt="nodejs" width="70" height="40"/>

---

### Objetivos:

- Realizar operações assíncronas utilizando callbacks;
- Realizar operações assíncronas utilizando Promises;
- Ler e escrever arquivos localmente com Node.js;
- Escrever seus próprios scripts que criam e consomem Promises;
- Reescrever código que usa callbacks para que use Promises.

---

### Exercícios:

1. Crie uma função que recebe três parâmetros retorna uma `Promise`.
    1. Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo `"Informe apenas números"` .
    2. Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro `( (a + b) * c )`.
    3. Caso o resultado seja menor que 50, rejeite a Promise com o motivo `"Valor muito baixo"`
    4. Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.
1. Escreva um código para consumir a função construída no exercício anterior.
    1. Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe. Para gerar um número aleatório, utilize o seguinte trecho de código: `Math.floor(Math.random() * 100 + 1)` .
    1. Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.
    1. Utilize then e catch para manipular a Promise retornada pela função:
        1. Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
        1. Caso a Promise seja resolvida, escreva na tela o resultado do cálculo.
1. Reescreva o código do exercício anterior para que utilize async/await .
    - Lembre-se: a palavra chave await só pode ser utilizada dentro de funções async .
1. Realize o download deste arquivo e salve-o como simpsons.json . Utilize o arquivo baixado para realizar os requisitos abaixo.
    -  Você pode utilizar then e catch , async/await ou uma mistura dos dois para escrever seu código. Procure não utilizar callbacks.
    1. Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson .
    1. Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
    1. Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
    1. Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.
    1. Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .
    1. Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json .
