const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
}

const eqArrays = (actual, expected) =>
actual.length === expected.length &&
actual.every((v, i) => v === expected[i]);

const eqObjects = function(object1, object2) {
  array = ""
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false
  } else for (let key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      array = eqArrays(object1[key], object2[key])
      return array
    } else if (object1[key] === object2[key]) {
      return true
    } else {
      return false
    }
  }
}

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
