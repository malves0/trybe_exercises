function nth_prime(n) {
  // Write your code here
  
  for(let i = 2; i < n; i++) {
    if (n % i === 0)
  };
};

nth_prime(6)

const isPrime = (num) => {
  for (let i = 2; i < num; i++)
    if (num % i === 0) {
      return false;
    }
  return num > 1;
};

console.log(isPrime(-1))