// 
// function dogBreeder(name='Steve', age=0) {
//   if (typeof name === 'number') {
//     age = name;
//     name = 'Steve'
//   }

//   let newDog =  {
//     name: name,
//     age: age
//   };

//   return newDog;
// }

function getDogBreeder(defaultName, defaultAge) {

  
    return function(name = defaultName, age = defaultAge) {
  
       if (typeof name === 'number') {
          age = name;
          name = defaultName;
        }
        let newDog =  {
          name: name,
          age: age
        };
  
        return newDog;
    }
  }