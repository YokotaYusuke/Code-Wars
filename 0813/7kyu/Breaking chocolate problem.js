// test


const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(breakChocolate(5, 5) , 24)
Test.assertEquals(breakChocolate(1, 1) , 0)
  });
});





// mine


function breakChocolate(n,m) {
  return n > 0 && m > 0 ? n * m - 1 : 0;
}


// best


function breakChocolate(n,m) {
  return n > 0 && m > 0 ? n * m - 1 : 0;
}