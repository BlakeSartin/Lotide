const assertEqual = require('./assertEqual')
const tail = function(actual) {
  return actual.slice(actual.length -1)[0]
}

module.exports = tail