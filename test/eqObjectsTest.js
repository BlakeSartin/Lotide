const assert = require('chai').assert
const eqObjects = require('../eqObjects')

eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }) // => true

eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }) // => false
eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }) // => false