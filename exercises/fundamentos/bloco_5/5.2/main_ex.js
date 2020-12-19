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
//4
newDiv = document.createElement('p');
father = document.querySelector('.center-content');
father.appendChild(newDiv).innerText = 'O objetivo desses exercícios é colocar em prática o que você acabou de aprender sobre DOM. Por isso, você deve fazer os exercícios utilizando apenas código JavaScript';
//5
newDiv = document.createElement('div');
father = document.querySelector('.main-content')
father.appendChild(newDiv).className = 'left-content';
//6
newDiv = document.createElement('div');
father.appendChild(newDiv).className = 'right-content';
//7
newDiv = document.createElement('img');
father = document.querySelector('.left-content');
father.appendChild(newDiv).src = 'https://picsum.photos/200';
father.firstChild.className = 'small-image';
//8
let numbersList = [
    'um',
    'dois',
    'três',
    'quatro',
    'cinco',
    'seis',
    'sete',
    'oito',
    'nove',
    'dez'
];
father = document.querySelector('.right-content');
newDiv = document.createElement('ul');
father.appendChild(newDiv);

for(let index = 0; index < numbersList.length; index += 1) {
    let itemList = numbersList[index];
    let newNumber = document.createElement('li');
    newNumber.innerText = itemList;
    father.appendChild(newNumber);
}
//9
father = document.querySelector('.main-content');
for(let cont = 1; cont <= 3; cont += 1){
    newDiv = document.createElement('h3')
    father.appendChild(newDiv)
}
