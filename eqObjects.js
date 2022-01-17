const assertEqual = require('./assertEqual')

const eqArrays = require('./eqArrays')

const eqObjects = function(object1, object2) {
  array = ""
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false
  }
  for (let key of Object.keys(object1)) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      array = eqArrays(object1[key], object2[key])
      return array
    } else if (object1[key] !== object2[key]) {
      return false
    }
  }
  return true
}
module.exports = eqObjects

