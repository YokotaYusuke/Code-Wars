// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Sample Tests", () => {
  it("Should pass sample tests", () => {
    assert.deepEqual([1, 2, 3, 4].reverse(), [4,3,2,1]);
    assert.deepEqual(["a", "b", "c"].reverse(), ["c", "b", "a"]);
    assert.deepEqual([].reverse(), []);
  });
});




// thisが分からん
// this は function を呼んだ時の . の前についているオブジェクトを指している