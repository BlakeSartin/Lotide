const assertEqual = require('./assertEqual')

const findKeyByValue = function(object, value) {
  const array = Object.keys(object);
  for (let element of array) {
    if (object[element] === value) return element;
  }
};




module.exports = findKeyByValue