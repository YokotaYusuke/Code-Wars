// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
    assert.strictEqual(reverseWords('apple'), 'elppa');
    assert.strictEqual(reverseWords('a b c d'), 'a b c d');
    assert.strictEqual(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');
  });
});


// mine

function reverseWords(str) {
  const arr = str.split(" ");
  const reverseArr = arr.map(element => {
    return [...element].reverse().join("");
  });
  return reverseArr.join(" ");
}


// best

function reverseWords(str) {
  return str.split(' ').map(function(word){
    return word.split('').reverse().join('');
  }).join(' ');
}


// other

function reverseWords(str) {
  // Go for it
  //split words into seperate arrays
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

// other2

function reverseWords(str) {
  return str.split(' ').map( str => str.split('').reverse().join('') ).join(' ');
}
