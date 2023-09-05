// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Sample Tests", () => {
  it("Should pass sample tests", () => {
    assert.strictEqual(splitAndMerge("My name is John"," ") , "M y n a m e i s J o h n");
    assert.strictEqual(splitAndMerge("My name is John","-") , "M-y n-a-m-e i-s J-o-h-n");
    assert.strictEqual(splitAndMerge("Hello World!",".") , "H.e.l.l.o W.o.r.l.d.!");
    assert.strictEqual(splitAndMerge("Hello World!",",") , "H,e,l,l,o W,o,r,l,d,!");
  });
});




// mine


function splitAndMerge(string, separator) {
  return string.split(" ").map(element => [...element].join(separator)).join(" ");
}




// best


function splitAndMerge(str, sp) {
  return str.split(" ").map(word => word.split("").join(sp)).join(" ");
}