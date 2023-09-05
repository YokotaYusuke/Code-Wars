// test


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Sample Test", () => {
  it("test", () => {
    // This here is a pretty big clue
    assert.strictEqual(theVar('d+g'), 11);
  });
});



// mine
// UTF-16コードの取得方法が分からなかったのでアルファベットを作成

function theVar(theVariables) {
  const alphabetStr = "abcdefghijklmnopqrstuvwxyz";
  const strArray = theVariables.split("");
        
  return alphabetStr.indexOf(strArray[0]) + 1 + alphabetStr.indexOf(strArray[2]) + 1;
}


// best
// charCodeAt()でUTF-16コード変換

function theVar(theVariables) {
  return theVariables.charCodeAt(0) + theVariables.charCodeAt(2) - 2 * 96;
}


// other

const theVar = theVariables =>
  theVariables.charCodeAt() + theVariables.charCodeAt(2) - 192;





