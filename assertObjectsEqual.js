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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
}
console.log(eqObjects({ a: '1', b: '3' }, { a: '1', b: 2 }))