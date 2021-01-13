/* Crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele. */
const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  let newKey = 'lastName';
  const lastName = 'Ferreira';
  function fuunfun (obj, key, value) {
    obj[key] = value;
  }
  fuunfun(customer, newKey, lastName)
  console.log(customer);