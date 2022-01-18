const assert = require('chai').assert
const without = require('../without')

describe ("#without", () => {
  const words = ["hello", "world", "lighthouse"];
  it ("return hello, world for hello, lighthouse, world", () => {
    assert.deepEqual(without(words,["lighthouse"]), ["hello", "world"])
  })
})