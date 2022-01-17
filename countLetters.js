const assertEqual = require("./assertEqual")

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

module.exports = countLetters