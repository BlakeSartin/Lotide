const eqArrays = require('./eqArrays')
  
const assertArraysEqual = require('./assertArraysEqual')

const without = function (source, itemsToRemove) {
let newArray = []
for (const element of source) {
  if (!itemsToRemove.includes(element)) {
    newArray.push(element)
  }
}
return newArray
}


module.exports = without