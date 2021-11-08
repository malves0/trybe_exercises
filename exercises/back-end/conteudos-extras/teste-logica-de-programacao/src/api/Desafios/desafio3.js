// function count_down(x) {
//   // Write your code here
//   let count = x
//   for (; x > 0; x--) {
//     count = (`${count}...${x-1}`)
//   };
//  return count;
// }

function count_down(x) {
  // Write your code here
  const theEnd = '!!!';
  let count = [];
  for (; x >= 0; x--){
    count.push(x)
    // console.log(count)
  };
  return count.join('...') + theEnd
};

console.log(count_down(10));