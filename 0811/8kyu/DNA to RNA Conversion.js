// test


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(DNAtoRNA("TTTT"), "UUUU")
    assert.strictEqual(DNAtoRNA("GCAT"), "GCAU")
    assert.strictEqual(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC")
    });
  })



  // mine

  function DNAtoRNA(dna) {
    return dna.replace(/T/g,"U");
  }



// best


function DNAtoRNA(dna){
  return dna.replace(/T/g, 'U');
}
