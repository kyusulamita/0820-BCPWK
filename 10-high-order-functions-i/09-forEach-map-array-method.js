/*
  forEach => callBackFunc

  callBackFunc 
  @elem [optional]
  @index [optional]
  @arr [optional]

  @returns nothing
*/

/*
  map => callBackFunc

  callBackFunc 
  @elem [optional]
  @index [optional]
  @arr [optional]

  @ returns a new array
    each element is the result of the callBackFunc
*/

// let bridges = ['Brooklyn', 'Golden Gate', 'London'];

// // // elem, index, arr
// function logUpperCase(str, idx) {
//   console.log(str.toUpperCase());
//   console.log('At index ', idx)
// }

// bridges.forEach(logUpperCase);
// const pets = ['Mr Bear', 'Pusheen', 'Sookie', 'Winkie'];

// function lovesToEat(name, idx, arr) {
//   console.log(`${name} loves to eat. He is at index ${idx}`);
//   return name.toUpperCase();
// }

// callsAllWith(pets, lovesToEat)

// const forEachReturn = pets.forEach(lovesToEat);
// console.log(pets);
// console.log(forEachReturn);


// function logUpperCase(elem) {
//   console.log(elem.toUpperCase());
//   return elem.toUpperCase();
// }

// const forEachReturn = bridges.forEach(logUpperCase);
// console.log(forEachReturn);

// const mapReturn = bridges.map(logUpperCase);
// console.log(mapReturn);
// console.log(bridges);


// function ourForEach(arr, callBackFunc) {
//   for (let i = 0; i < arr.length; i++) {
//     callBackFunc(arr[i], i, arr);
//   }
//   return undefined;
// }

// function ourMap(arr, callBackFunc) {
//   const newArr = [];
//   for(let i = 0; i < arr.length; i++) {
//     const res = callBackFunc(arr[i], i, arr);
//     newArr.push(res);
//   }
//   return newArr;
// }


// function capitalizeNames(name, idx){
//   // name -> Bear
//   // idx -> 0
//   console.log(`${name} loves to eat. He is at index ${idx}`);
//   // 
//   return name.toUpperCase() + '!!!';
// }

// const pets = ['Mr Bear', 'Pusheen', 'Sookie', 'Winkie'];

// const petUpper = pets.map(capitalizeNames);
// console.log(petUpper);
// console.log(pets);

// const nums = [1, 2, 3, 4, 5];

// function squareNum(num){
//   // return num *  num;
//   console.log(num * num);
//   // return undefined
// }

// const numsSquared = nums.map(squareNum);
// console.log(nums);
// console.log(numsSquared);

// const numsSquared = nums.map(function(num) {
//   return num * num;
// })

// const numsSquared = nums.map((num) => num * num);
// console.log(numsSquared);
// console.log(nums);