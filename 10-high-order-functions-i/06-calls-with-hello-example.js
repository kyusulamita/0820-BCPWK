/*
https://goo.gl/zFvFvx
https://goo.gl/t6AKRa

*/

function addWorld(string) {
  // string -> 'hello'
  // return 'hello world'
  console.log('add world running')
  return string + ' world';
}

// function callsWithHello(func) {
//   // func => addWorld
//   // return addWorld('hello')
//   return func('hello');
// }

// let result = callsWithHello(addWorld); // addWorld('Hello')

// console.log(result);



// high order function
function callsWithHello(func) {
  // func => addWorld
  // sentence = addWorld('hello')
  // sentence => 'hello world'
  let sentence = func('hello');
  // sentence => 'hello world!!!'
  return sentence +  '!!!';
}

function addsEveryone(string) {
  return string + ' everyone';  
}

// let result1 = callsWithHello(addWorld);  
let result1 = addWorld('hello')
result1 = result1 + '!!!';
// let result2 = callsWithHello(addsEveryone);
let result2 = addsEveryone('hello')
result2 = result2 + '!!!';

console.log(result1);
console.log(result2);