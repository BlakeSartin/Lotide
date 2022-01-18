
const assert = require('chai').assert
const countOnly = require('../countOnly')
describe ("#countOnly", () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ]
  it ("return Jason for Jason", () => {
    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false })

    assert.strictEqual((result1["Jason"]), 1)
  })
})




