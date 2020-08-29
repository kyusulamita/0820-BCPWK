/*

https://goo.gl/aHZzHW

*/

function plus(num1, num2) {
  return num1 + num2;
}

function minus(num1, num2) {
  return num1 - num2;
}

function calc(num1, operationFunc, num2) {
  return operationFunc(num1, num2);
}

console.log(calc(10, plus, 20));
console.log(calc(50, minus, 10));