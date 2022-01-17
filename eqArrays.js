const assertEqual = require('./assertEqual')

const eqArrays = (actual, expected) =>
actual.length === expected.length &&
actual.every((v, i) => v === expected[i]);

module.exports = eqArrays