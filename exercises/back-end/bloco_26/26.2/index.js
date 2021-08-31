//2
const { compareNum } = require('./CompareNum.js');

function randomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

function Compare() {
  return (
    compareNum(randomNumber(),randomNumber(),randomNumber())
      .then((res) => console.log(res))
      .catch((error) => console.error(error.message))
  );
}

Compare();