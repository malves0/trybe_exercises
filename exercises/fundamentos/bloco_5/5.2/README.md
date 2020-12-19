# Bloco 5 - JavaScript: DOM, Eventos e Web Storage
## Dia 2 - JavaScript - Trabalhando com elementos

### Parte I - Buscando Elementos
#### Atividade de reforço de conteúdo

1. Acesse o elemento `elementoOndeVoceEsta` .
2. Acesse `pai` a partir de `elementoOndeVoceEsta` e adicione uma `color` a ele.
3. Acesse o `primeiroFilhoDoFilho` e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
4. Acesse o `primeiroFilho` a partir de `pai` .
5. Agora acesse o `primeiroFilho` a partir de `elementoOndeVoceEsta` .
6. Agora acesse o texto `Atenção!` a partir de `elementoOndeVoceEsta` .
7. Agora acesse o `terceiroFilho` a partir de `elementoOndeVoceEsta` .
8. Agora acesse o `terceiroFilho` a partir de `pai` .

### Parte II - Criando elementos
#### Atividade de reforço de conteúdo

1. Crie um irmão para `elementoOndeVoceEsta` .
2. Crie um filho para `elementoOndeVoceEsta` .
3. Crie um filho para `primeiroFilhoDoFilho` .
4. A partir desse filho criado, acesse `terceiroFilho` .

### Parte III - Removendo elementos
#### Atividade de reforço de conteúdo

- Remova todos os elementos da página, menos `pai` , `elementoOndeVoceEsta` e `primeiroFilhoDoFilho` .

### Exercícios

O objetivo desses exercícios é colocar em prática o que você acabou de aprender sobre DOM. Por isso, você deve fazer os exercícios utilizando apenas código *JavaScript* , o qual deve ser inserido entre as tags `<script>` e `</script>` .

1. Adicione a tag `div` com a classe `main-content` como filho da tag `body` ;
2. Adicione a tag `div` com a classe `center-content` como filho da tag `div` criada no passo 2;
3. Adicione a tag `p` como filho do `div` criado no passo 3 e coloque algum texto;
4. Adicione a tag `div` com a classe `left-content` como filho da tag `div` criada no passo 2;
5. Adicione a tag `div` com a classe `right-content` como filho da tag `div` criada no passo 2;
6. Adicione uma imagem com `src` configurado para o valor `https://picsum.photos/200` e classe `small-image` . Esse elemento deve ser filho do `div` criado no passo 5;
7. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do `div` criado no passo 6;
8. Adicione 3 tags `h3` , todas sendo filhas do `div` criado no passo 2.
9. Adicione a classe `title` na tag `h1` criada;
10. Adicione a classe `description` nas 3 tags `h3` criadas;
11. Remova o `div` criado no passo 5 (aquele que possui a classe `left-content` ). Utilize a função `.removeChild()` ;
12. Centralize o `div` criado no passo 6 (aquele que possui a classe `right-content` ). Dica: para centralizar, basta configurar o `margin-right: auto` do `div` ;
13. Troque a cor de fundo do elemento pai da `div` criada no passo 3 (aquela que possui a classe `center-content` ) para a cor verde;
14. Remova os dois últimos elementos ( `nove` e `dez` ) da lista criada no passo 8.