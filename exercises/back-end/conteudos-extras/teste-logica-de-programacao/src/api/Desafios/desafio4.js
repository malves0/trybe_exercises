function multiples_of_3_or_5(roof) {
  let multiples = [];

  for(let index = roof - 1; index > 0; index--) {
    if(index % 3 === 0 || index % 5 === 0) multiples.push(index)
  };

  const sumOfMultiples = multiples.reduce((prev, curr) => prev + curr);

  return sumOfMultiples
}

multiples_of_3_or_5(10);