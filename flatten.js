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

const flatten = function(elements) {
  let flatArray = []
  for (let i = 0; i < elements.length; i++) {
    if (Array.isArray(elements[i])) {
      for (const element of elements[i]) {
        flatArray.push(element)
      }
    } else {
      flatArray.push(elements[i])
    }
  }
  return flatArray
}
console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]