// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(stringToArray("Robin Singh"), ["Robin", "Singh"]);
    assert.deepEqual(stringToArray("I love arrays they are my favorite"), ["I", "love", "arrays", "they", "are", "my", "favorite"]);
  });
});

// mine


function stringToArray(string){
  return string.split(" ");
}






