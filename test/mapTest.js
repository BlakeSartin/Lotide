const assert = require('chai').assert
const map = require('../map')

describe ("#map", () => {
  const words = ["ground", "control", "to", "major", "tom"];
  it ("return 3 for [1, 2, 3]", () => {
    const results1 = map(words, word => word[0]);
    assert.deepEqual((results1), [ 'g', 'c', 't', 'm', 't' ])
  })
})