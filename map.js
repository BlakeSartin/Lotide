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


const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback){
const results = []
for (let item of array) {
results.push(callback(item))
}
return results
}

const results1 = map(words, word => word[0]);
console.log(assertArraysEqual(results1));