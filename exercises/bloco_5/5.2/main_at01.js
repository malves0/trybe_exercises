//1
let ondeVoceEsta = document.querySelector('#elementoOndeVoceEsta');
console.log(ondeVoceEsta);
//2
let paiOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta').parentNode;
console.log(paiOndeVoceEsta);
paiOndeVoceEsta.style.color = 'red';
//3
let primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
console.log(primeiroFilhoDoFilho);
primeiroFilhoDoFilho.innerHTML = 'Esté é o Primeiro Filho do Filho'
//4
let primeiroFilho = document.querySelector('#pai').firstChild;
console.log(primeiroFilho);
//5
primeiroFilho = document.querySelector('#elementoOndeVoceEsta').previousElementSibling;
console.log(primeiroFilho);
//6
let atencao = document.querySelector('#elementoOndeVoceEsta').parentNode.innerText;
console.log(atencao);
//7
let terceiroFilho = document.querySelector('#elementoOndeVoceEsta').nextElementSibling;
console.log(terceiroFilho);
//8
terceiroFilho = document.querySelector('#pai').childNodes[5];
console.log(terceiroFilho);
console.log('Parte II')
//Parte II
//1
let divNova = document.createElement('div');
let local = document.querySelector('#elementoOndeVoceEsta').parentNode;
local.appendChild(divNova);
//2
local = document.querySelector('#elementoOndeVoceEsta');
local.appendChild(divNova);
//3
local = document.querySelector('#primeiroFilhoDoFilho');
local.appendChild(divNova).id = 'filhoDoPrimeiroFilhoDoFilho';
//4
local = document.querySelector("#filhoDoPrimeiroFilhoDoFilho")
local = local.parentNode.parentNode.parentNode.childNodes[5]
console.log(local)
// Parte III
//1

var elemento = document.getElementById("paiDoPai");
while (elemento.firstChild) {
    let id = elemento.firstChild.id
    console.log(id)
   // if (id !== 'pai'){
        elemento.removeChild(elemento.firstChild);
  // }
}

/** Remova todos os elementos da página, menos `pai` , `elementoOndeVoceEsta` e `primeiroFilhoDoFilho` .*/