const sum = require('./exercise01')

describe('sum', () => {
  test('sums two values', () => {
    expect(sum(4, 5)).toBe(9);
  });

  test('0 plus 0 equals 0', () => {
    expect(sum(0, 0)).toBe(0);
  })

  test('Throws an error when the parameters are 4 and "5"', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
  })

  test('error message is "parameters must be numbers"', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow(/parameters must be numbers/);
  });

})
