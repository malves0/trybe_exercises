# Dia 7.1 | JavaScript ES6 - let, const, arrow functions e template literals 

## **O que vamos aprender**

    Neste bloco e no próximo, você vai aprender sobre a mais nova versão do ***JavaScript*** , conhecida como **ES6** , **ECMAScript 6** ou **ES2015** .

    Esses vários nomes podem gerar alguma dúvida, mas na verdade todos fazem referência à mesma linguagem. ***JavaScript*** é como nós chamamos a linguagem, só que esse nome é um *trademark* da *Oracle* . O nome oficial da linguagem é **ECMAScript** , e **ES** é apenas a abreviação ( **E** CMA **S** cript).

    Essa nova versão possui alguns objetivos:

    - Ser uma linguagem melhor para construir aplicações complexas;
    - Resolver problemas antigos do JavaScript;
    - Facilitar o desenvolvimento de *libraries* .

    Hoje você vai aprender quatro `features` do ***ES6*** que são muito importantes para que seu código fique limpo e bem escrito, além de resolverem alguns problemas da linguagem.

    - `let` ;
    - `const` ;
    - `arrow functions` ;
    - `template literals` .

## **Você será capaz de:**
    - Utilizar corretamente `let` e `const` ;
    - Simplificar seu código com `arrow functions` ;
    - Simplificar a construção de strings com `template literals` .
## **Por que isso é importante?**

    O `let` e o `const` vieram como solução para um antigo problema do ***JavaScript*** de falta de definição de escopo de variáveis. Sabe quando você declara uma variável dentro de um bloco e depois a utiliza fora dele? Isso é um vazamento de variável. Esse problema sempre trouxe grandes prejuízos, principalmente para aplicações maiores. Saber utilizar o `let` e o `const` de maneira consistente irá te ajudar a ter um código mais confiável e previsível.

    As `arrow functions` , além de deixar o código mais legível, quando bem utilizadas, ainda resolvem outro problema antigo do famigerado `var that = this` . Vamos ver esse problema com mais detalhes na sessão de conteúdos.

    Por último, mas não menos importante, vêm os `template literals` . Eles vão nos ajudar a construir strings mais bem escritas e concisas, ajudando na prevenção de erros.