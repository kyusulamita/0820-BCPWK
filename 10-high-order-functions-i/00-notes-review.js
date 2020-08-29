function chainReaction(strVal, arrOfFuncs) {
    //  strVal => 0, 
    // arrOfFuncs => [subtractFive, multiplyFive, addTen]
    // secondVal  = subtractFive(0) => -5
  //   let secondVal = arrOfFuncs[0](strVal);
  //   // thirdVal = multiplyFive(secondVal) => multiplyFive(-5) => -25
  //   let thirdVal = arrOfFuncs[1](secondVal);
  //   //fourthVal => addTen(thirdVal) => addTen(-25) => -15
  //   let fourthVal = arrOfFuncs[2](thirdVal);
    
  //   return fourthVal;
    let prevVal = strVal;  // prevVal -> -15
    for (let i = 0; i < arrOfFuncs.length; i++) {
      // addTen(-25)
      prevVal = arrOfFuncs[i](prevVal);
    }
    
    return prevVal;
  }