// test


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Should pass Basic tests", () => {
    assert.deepEqual(arrayDiff([1,2], [1]), [2], "a was [1,2], b was [1]");
    assert.deepEqual(arrayDiff([1,2,2], [1]), [2,2], "a was [1,2,2], b was [1]");
    assert.deepEqual(arrayDiff([1,2,2], [2]), [1], "a was [1,2,2], b was [2]");
    assert.deepEqual(arrayDiff([1,2,2], []), [1,2,2], "a was [1,2,2], b was []");
    assert.deepEqual(arrayDiff([], [1,2]), [], "a was [], b was [1,2]");
    assert.deepEqual(arrayDiff([1,2,3], [1,2]), [3], "a was [1,2,3], b was [1,2]")
  });
});


// mine

// aの配列からbの配列の要素を削除したいので
// aの配列の各要素に対してbの配列の要素と同じものが有るかindexOf()でチェックして
// 要素が無ければそのまま配列で返したいので-1以外をfilterで返す

function arrayDiff(a, b) {
  return a.filter(element => b.indexOf(element) === -1);
}


// best

// includesを使っている

function array_diff(a, b) {
  return a.filter(e => !b.includes(e));
}


// other

function array_diff(a, b) {
  return a.filter(function(x) { return b.indexOf(x) == -1; });
}



