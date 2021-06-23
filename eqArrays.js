const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }

};


// const eqArrays = function(array1, array2) {
//   let counter = 0
//   for (i = 0; i < array1.length; i++) {
//     console.log(array1[i], array2[i])
//     if (array1[i] === array2[i]) {
//       console.log('match'); 
//     } 
//     if (array1[i] !== array2[i]) {
//       console.log('no match')
//       counter++
//     }
//   }
//   if (counter === 0) {
//     return true
//   }
//   if (counter !== 0) {
//     return false
//   }
// };

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false
    }
  }
  return true
}

console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"])/* === true*/, false))
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false))