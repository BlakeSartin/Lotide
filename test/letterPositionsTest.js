const assert = require('chai').assert
const letterPositions = require('../letterPositions')

describe ("#letterPositions", () => {
  it ("return { o: [ 0 ], k: [ 1 ] } for ok", () => {
    assert.deepEqual(letterPositions("ok"), { o: [ 0 ], k: [ 1 ] })
  })
})