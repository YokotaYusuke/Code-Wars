// test


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("The Office III - Broken Photocopier", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(broken("1"), "0");
    assert.strictEqual(broken("10000000101101111110011001000"), "01111111010010000001100110111");
    assert.strictEqual(broken("100010"), "011101");
  });
});




// mine
// 0と1を反転させて出力する


function broken(x){
  return [...x].reduce((a,b) => {
    return b === "0" ? a + "1" : a + "0";
  },"")
}


// best

function broken(x){
  return x.split('').map(a => a == "0" ? "1" : "0").join('');
}

// other

const broken = x =>
  x.replace(/\d/g, val => val ^ 1);









