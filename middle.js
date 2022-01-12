const eqArrays = (actual, expected) =>
actual.length === expected.length &&
actual.every((v, i) => v === expected[i]);

const assertArraysEqual = function(actual, expected) {
  if (eqArrays) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
}

const middle = function(array) {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    return [array[Math.ceil(array.length / 2) - 1], array[Math.ceil(array.length / 2)]];
  } else {
    return [array[Math.floor(array.length / 2)]];
  }
};

console.log(assertArraysEqual(middle([1, 2])))