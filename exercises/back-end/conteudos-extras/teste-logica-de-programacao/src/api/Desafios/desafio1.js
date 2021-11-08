function fahrenheit_to_celsius(temp_fahrenheit) {
  // Write your code here
  
  return ((temp_fahrenheit - 32)/1.8).toFixed(1)


}

console.log(fahrenheit_to_celsius(95));


module.exports = fahrenheit_to_celsius;