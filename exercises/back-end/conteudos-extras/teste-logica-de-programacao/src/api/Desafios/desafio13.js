
function digits_sum(number_s) {
  // Write your code here

  let count = 0;
  for (let i = 0; i < 1000; i++) {
    const numToStr = i.toString();
    const arrSplitted = numToStr.split('')
    const sum = arrSplitted.reduce((prev, curr) => parseInt(prev) + parseInt(curr));
    if(sum === number_s) count = count + 1
  };
  return count
};

digits_sum(26);