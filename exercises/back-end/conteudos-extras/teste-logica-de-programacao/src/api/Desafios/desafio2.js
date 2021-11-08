function difference(x) {
  // Write your code here
  const comparisonValue = 10;
  return x < comparisonValue
    ? comparisonValue - x
    : x - comparisonValue
}

console.log(difference(3));
console.log(difference(15));