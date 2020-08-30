// const str = 'taco'


// console.log(str[0])

// // .length
// const length = str.length
// console.log(length)
// console.log(str[length-1]);


// Base Case:
// '' => NOTHING
// 's' => console.log('s')


// Recursive case

// log out the last letter, 
// let the function handle the rest

// 'cat'

// 't' => 'ca'
// console.log('t')
// handle 'ca'

// 'a' -> 'c'
// console.log('a')
// handle 'c'

// 'c'
// console.log('c')

function backwardString(str) {
    //str => ''
    // base Case
    if (str === '') {
      return;
    }
  
    // if (str.length === 1) {
    //   console.log(str); // 'a'
    //   return;
    // }
  
    const lastChar = str[str.length - 1]; // 'a'
    const restOfStr = str.slice(0, -1); //  ''
    console.log(lastChar); // 'a'
    backwardString(restOfStr); // ''
  }
  
  
  // backwardString('');
  // backwardString('d');
  
  
  backwardString('tacocat')