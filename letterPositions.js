const eqArrays = require('./eqArrays')
  
const assertArraysEqual = require('./assertArraysEqual')

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

module.exports = letterPositions