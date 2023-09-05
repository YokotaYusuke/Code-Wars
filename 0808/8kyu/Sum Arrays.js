// test

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(sum([]), 0);
Test.assertEquals(sum([1, 5.2, 4, 0, -1]), 9.2);
  });
});


// mine

// Sum Numbers
function sum (numbers) {
  "use strict";
  return numbers.reduce((a,b) => a + b, 0);
};


// best

function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}





