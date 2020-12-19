//1
let newDiv = document.createElement('h1');
let father = document.querySelector('body');
father.appendChild(newDiv).innerText = 'Exercício 5.2 - JavaScript DOM';
//2
newDiv = document.createElement('div');
father.appendChild(newDiv).className = 'main-content';
//3
newDiv = document.createElement('div');
father = document.querySelector('.main-content');
father.appendChild(newDiv).className = 'center-content';

