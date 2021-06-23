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
    return `The arrays and are the same`;
  } else {
    return `The arrays are not the same`;
  }
};


console.log(assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true))