function myIncludes(arr, strToMatch) {
  // searching in an array from begining to end
  // for loop
  
  // arr => ['apples', 'bananas', 'citrus']
  // strToMatch => 'hamster'
  
  // each time i check an element one of two things can happen
  // either i found it and we can say yes! we have it
  // OR i didn't find it and i have to look at the next one
  
  
  for (let i = 0; i < arr.length; i++) { // i = 
    const elem = arr[i];
    if (elem === strToMatch) {
      return true;
    } else {
      // return false;
      // ok, this wasn't it
      // let's go to the next one
    }
  }
  
  // return undefined;
  // we checked the whole array. didn't find it
  // return false
  return false;
}




function oddCouple(arr) {
  // arr => [1, 2, 3, 4, 5]
  // newArr => [1, 3]
  const oddNums = []; // [1, 3]
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    // % 
    // num % 2 => remainder after dividing by 2
    if (element % 2 === 1) {
      // this is an odd num
      oddNums.push(element);
    } 
    
    if (oddNums.length === 2) {
       // if we've found 2 odd numbers, no need to keep looking
      // just return
      break;
    }
  
  }
  
  return oddNums;
}