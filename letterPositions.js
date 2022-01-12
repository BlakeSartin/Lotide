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


const letterPositions = function(sentence) {
  const result = {}
  var index = 0
for (let letter of sentence) {
  if (letter === " ") {
    index++
    //result[letter]
  } else if (result[letter] === undefined) {
    result[letter] = [index]
  } else {
    result[letter].push(index)
  }
  index++
}
  return result
}

