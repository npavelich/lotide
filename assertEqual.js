const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }

};




assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(7, 2);
assertEqual("Apple", "Apple");