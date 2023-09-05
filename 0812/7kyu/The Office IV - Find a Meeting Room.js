// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("The Office IV - Find a Meeting Room", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(meeting(['X', 'O', 'X']), 1);
//     assert.strictEqual(meeting(['O','X','X','X','X']), 0);
//     assert.strictEqual(meeting(['X','X','X','X','X']), 'None available!');
  });
});



// mine
// indexOfで配列に検索

// includesはtrue,false返す
// indexOfはインデックス番号を返す

function meeting(x){
  return x.indexOf('O') === -1 ? 'None available!' : x.indexOf('O');
}

// mine2

function meeting(x){
  return x.includes("O") ? x.indexOf("O") : 'None available!';
}


// best

function meeting(x){
  var idx = x.indexOf("O");
  return idx === -1 ? "None available!": idx
}

// other

const meeting = x =>
  !x.includes(`O`) ? `None available!` : x.indexOf(`O`);