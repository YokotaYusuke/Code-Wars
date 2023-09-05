// test

const { assert } = require("chai");

describe("Tests", () => {
  it("Basic tests",() => {
    assert.strictEqual(squaresNeeded(0), 0, 'n=0');
    assert.strictEqual(squaresNeeded(1), 1, 'n=1');
    assert.strictEqual(squaresNeeded(2), 2, 'n=2');
    assert.strictEqual(squaresNeeded(3), 2, 'n=3');
    assert.strictEqual(squaresNeeded(4), 3, 'n=4');
  });
});



// ??????

























