// test


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(nameShuffler('john McClane'),'McClane john');
    assert.strictEqual(nameShuffler('Mary jeggins'),'jeggins Mary')
    assert.strictEqual(nameShuffler('tom jerry'),'jerry tom')
  });
});



// mine

function nameShuffler(str){
  const arr = str.split(" ");
  return `${arr[1]} ${arr[0]}`;
}


// best

function nameSuffle(str){
  return str.split(' ').reverse().join(' ')
}








