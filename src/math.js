// src/math.js
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function factorial(n) {
  if (n < 0) throw new Error('Nombre négatif');
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
// test protection
function subtract(a, b) {
  return a - b;
}
module.exports = { add, multiply, factorial, subtract };
