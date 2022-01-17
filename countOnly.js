const assertEqual = require('./assertEqual')

const countOnly = function(allItems, itemsToCount) {
  let result = {}
  for (let i = 0; i <= allItems.length; i++) {
    for (var item in itemsToCount) {
    if (itemsToCount[item]) {
      if (allItems[i] === item) {
      if (result[item]) {
        result[item] += 1
      } else {
        result[item] = 1
      }
    }
  }
}
}
return result
}

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
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });


module.exports = countOnly