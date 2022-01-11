const eqArrays = (actual, expected) =>
actual.length === expected.length &&
actual.every((v, i) => v === expected[i])
  
const assertArraysEqual = function(actual, expected) {
  if (eqArrays) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
}

const without = function (source, itemsToRemove) {
let newArray = []
for (const element of source) {
  if (!itemsToRemove.includes(element)) {
    newArray.push(element)
  }
}
return console.log(newArray)
}

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);