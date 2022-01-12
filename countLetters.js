const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
}

const countLetters = function(str) {
  const result = {}
  for (const letter of str) {
    if (result[letter]) {
      result[letter] ++
    } else {
      result[letter] = 1
    }
  }
  return result
}

console.log(countLetters('LHL'))