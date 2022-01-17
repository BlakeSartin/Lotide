const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");
const middle = function (array) {
  console.log(typeof(array))
  var result = []
  if (array.length <= 2) {
    return result;
  } else if (array.length % 2 === 0) {
    console.log("even")
    result.push(array[Math.ceil(array.length / 2) - 1]) && result.push(array[Math.ceil(array.length / 2)])
  } else {
    console.log("odd")
    result.push(array[Math.floor(array.length / 2)]);
  }
  console.log(typeof(result), "result")
  return result
};

module.exports = middle;


