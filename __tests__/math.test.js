// __tests__/math.test.js
const { add, multiply, factorial, subtract } = require('../src/math');

describe('add', () => {
  test('adds two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });
  test('adds with a negative number', () => {
    expect(add(-1, 5)).toBe(4);
  });
});

describe('multiply', () => {
  test('multiplies two numbers', () => {
    expect(multiply(3, 4)).toBe(12);
  });
  test('multiplies by zero', () => {
    expect(multiply(5, 0)).toBe(0);
  });
});

describe('factorial', () => {
  test('factorial of 5', () => {
    expect(factorial(5)).toBe(120);
  });
  test('factorial of 0', () => {
    expect(factorial(0)).toBe(1);
  });
  test('throws error for negative number', () => {
    expect(() => factorial(-1)).toThrow('Nombre négatif');
  });
});


describe('subtract', () => {
  test('subtracts two numbers', () => {
    expect(subtract(5, 3)).toBe(2);
  });
});
