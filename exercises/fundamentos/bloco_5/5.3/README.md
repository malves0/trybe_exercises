# Dia 5.3 - JavaScript - Eventos
- Utilizar os eventos do JavaScript para fazer com que funções sejam executadas quando alguém as usa ou quando o navegador fizer alguma interação com a sua página web.

## Exercícios:

- [x] Exercício 1:
O array `dezDaysList` contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag `<ul>` com ID `"days"` . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Segunda-feira e Terça-feira.

- Os dias devem estar contidos em uma tag `<li>` , e todos devem ter a classe `day` . Ex: `<li class="day">3</li>`
- Os dias 24, 25 e 31 são feriados e, além da classe `day` , devem conter também a classe `holiday` . Ex: `<li class="day holiday">24</li>`
- Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe `day` e a classe `friday` . Ex: `<li class="day friday">4</li>`