function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  //1
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  function addDays(){
    father = document.querySelector('#days');
    for (let index in dezDaysList){
      let newli = document.createElement('li')
      let day = dezDaysList[index];
      if (day === 24 | day === 31) {
        newli.className = 'day holiday';
        newli.innerHTML = day;
        father.appendChild(newli);
      } else if (day === 4 | day === 11 | day === 18) {
        newli.className = 'day friday-day';
        newli.innerHTML = day;
        father.appendChild(newli);
      } else if (day === 25) {
        newli.className = 'day holiday friday-day';
        newli.innerHTML = day;
        father.appendChild(newli);
      } else {
        newli.innerHTML = day;
        newli.className = 'day';
        father.appendChild(newli);
      }
    }
  }
  addDays();
//2
function createButton(string){
  let fatherButton = document.querySelector('.buttons-container');
  let newButoon = document.createElement('button');
  newButoon.innerText = string;
  newButoon.id = 'btn-holiday';
  fatherButton.appendChild(newButoon);
}
createButton('Feriados');
//3
let holidayButton = document.querySelector('#btn-holiday');
holidayButton.addEventListener('click',clickHolidays);
function clickHolidays() {
let arraysDays = document.querySelectorAll('.holiday');
let backgroundColor = 'rgb(238,238,238)';
let setNewColor = 'pink';
  for (let index = 0; index < arraysDays.length; index+=1){
    if (arraysDays[index].style.backgroundColor === setNewColor) {
      arraysDays[index].style.backgroundColor = backgroundColor;
    } else {
      arraysDays[index].style.backgroundColor = setNewColor;
  }
}
}
//4
function createButtonFriday (string){
  let fatherButtonFriday = document.querySelector('.buttons-container');
  let newButoonFriday = document.createElement('button');
  newButoonFriday.innerText = string;
  newButoonFriday.id = 'btn-friday'
  fatherButtonFriday.appendChild(newButoonFriday);
}
createButtonFriday('Sexta-Feira');
//5
let fridayButton = document.querySelector('#btn-friday');
fridayButton.addEventListener('click',clickFriday);
function clickFriday() {
let text = 'Sextou \o/';
let fridays = document.querySelectorAll('.friday-day');
let fridaysArray = [ 4, 11, 18, 25 ]
  for (let index = 0; index < fridays.length; index += 1){
    if (fridays[index].innerHTML !== text) {
      fridays[index].innerHTML = text;
    } else {
      fridays[index].innerHTML = fridaysArray[index];
  }
}
}

