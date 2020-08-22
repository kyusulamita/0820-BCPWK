/* Logical operators also coerce values to boolean values */

// if (10 && 20) {
//   console.log('both 10 and 20 are truthy values');
// }

// if (10 && 0) {
//   console.log('this will not be logged');
// }
// else {
//   console.log('zero is falsey');
// }

/*
Notes:
--------

*/

// -------------------------------------------------------------------
//PART 2 OF LOGICAL OPERATORS OPERATORS BEGINS HERE

// Let's first talk about the && (AND) operator

/* && returns the first falsey value, or the last value if all the values are truthy */

// let returnedValue1 = 10 && 'apples' && 0 && null;
// console.log('returnedValue1:', returnedValue1); // 0

// let returnedValue2 = 'lucky' && 'number' && 7;
// console.log('returnedValue2:', returnedValue2); // 7

/*
Notes:
--------

*/

// -------------------------------------------------------------------
//PART 3 OF LOGICAL OPERATORS OPERATORS BEGINS HERE

// Now let's talk about the || (OR) operator

/* || returns the first truthy value, or the last value if all the values are falsey */

// let returnedValue3 = null || undefined || 'happy' || 'pumpkin';
// console.log('returnedValue3:', returnedValue3); // 'happy'

// let returnedValue4 = false || null || 10 < 0 || NaN;
// console.log('returnedValue4:', returnedValue4); // NaN

/*
Notes:
--------

*/

// -------------------------------------------------------------------
//PART 4 OF LOGICAL OPERATORS OPERATORS BEGINS HERE

// So let's take a look again at our original two examples:

if (10 && 20) {
  // 10 && 20 => 20, Boolean(10) => true
  console.log('both 10 and 20 are truthy values');
}

// if (10 && 20) => if(20) => true

if (10 && 0) {
  // 10 && 0 => 0, Boolean(0) => false
  console.log('this will not be logged');
} // if (10 && 0) => if(0) => false
else {
  console.log('zero is falsey');
}

if ('jake' || 10 || null) {
  // => if('jake') => true
  console.log('still true');
} else {
  console.log('false');
}

if ('' || 0 || null) {
  // => if(null) => false
  console.log('still true');
} else {
  console.log('false');
}

if (10 || ('jake' && 0)) {
  console.log('true');
} else {
  console.log('no');
}

/*
Notes:
--------

*/

// ---------------------------------------------
// RETURN TO OVERVIEW IN INDEX.JS
