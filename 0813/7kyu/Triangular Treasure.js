// test


const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual( triangular(2), 3 )
    assert.strictEqual( triangular(4), 10 )
    assert.strictEqual( triangular(-454), 0 )
  })
})




// mine


function triangular(n) {
  return n > 0 ? n * (n /2 + .5) : 0;
}



// best

// Return the nth triangular number
function triangular( n ) {
  return n > 0 ? n * (n + 1) / 2 : 0;
}