// test


const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
function add(x) {
	return x + 10;	
}

function mult(x) {
	return x * 30;
}

Test.assertEquals(chain(2, [add, mult]), 360, "Error: chain function does not work");
  });
});




