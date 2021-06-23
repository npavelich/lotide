/*
Design a function, if any value of array2 is present in array1, remove it. 
Do not change the original array (array1)
Return a new array that has the values of array2 removed
*/

const without = function(array1, array2) {
  let arrayFinal = [...array1] // our final array currently contains all the values of our array
  for (let i = 0; i < array2.length; i++) {
    for (let x = 0; x < array1.length; x++) {
      if (array2[i] === arrayFinal[x]) {

        arrayFinal.splice(x, 1)
      }
    }
  }

  return arrayFinal
}

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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    return `The arrays are the same`;
  }
  return `The arrays are not the same`;
};
