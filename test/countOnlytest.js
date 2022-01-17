
const assert = require('chai').assert
const countOnly = require('../countOnly')

describe ("#countOnly", () => {
  it ("return Jason for Jason", () => {
    assert.strictEqual(countOnly(["Jason"]), 1)
  })
})



