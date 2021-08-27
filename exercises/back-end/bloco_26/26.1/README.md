# Node.js - Introdução

### Tecnologias:

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1024px-Node.js_logo.svg.png" alt="nodejs" width="70" height="40"/>

---

### Objetivos:

- Utilizar os comandos do npm para criar e gerenciar pacotes e dependências;
- Utilizar o comando node para executar scripts;
- Utilizar o sistema de módulos do Node.js;
- Criar scripts simples, com interação do usuário, com Node.js.

---

### Exercícios:

#### 1. Crie um script para calcular o Índice de Massa Corporal(IMC) de uma pessoa.
1. A fórmula para calcular o IMC é peso / altura ^ 2 .
2. Comece criando um novo pacote node com npm init e respondendo às perguntas do npm .
3. Por enquanto, não se preocupe em pedir input da pessoa usuária. Utilize valores fixos para peso e altura .
4. Armazene o script no arquivo imc.js .
5. Permita que o script seja executado através do comando npm run imc. 
6. Chegou a hora de tornar nosso script mais interativo! Vamos adicionar input de quem usa. Substitua os valores fixos de peso e altura por dados informados pela pessoa ao responder as perguntas "Qual seu peso?" e "Qual sua altura?" no terminal.
7. Vamos sofisticar um pouco mais nosso script. Além de imprimir o IMC na tela, imprima também em qual categoria da tabela abaixo aquele IMC se enquadra:


| IMC                                       | Situação                  |
| ----------------------------------------- | ------------------------- |
| Abaixo de 18,5                            | Abaixo do peso (magreza)  |
| Entre 18,5 e 24,9                         | Peso normal               |
| Entre 25,0 e 29,9                         | Acima do peso (sobrepeso) |
| Entre 30,0 e 34,9                         | Obesidade grau I          |
| Entre 35,0 e 39,9                         | Obesidade grau II         |
| 40,0 e acima                              | Obesidade graus III e IV  |