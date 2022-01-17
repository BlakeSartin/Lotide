const eqArrays = require('./eqArrays')
  
const assertArraysEqual = require('./assertArraysEqual')

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

module.exports = flatten