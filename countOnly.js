const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
}

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
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);