// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(smallEnough([66, 101], 200), true);
    assert.strictEqual(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100), false);
    assert.strictEqual(smallEnough([101, 45, 75, 105, 99, 107], 107), true);
    assert.strictEqual(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120), true);
  })
})


// mine

// 配列の要素の最大値をMath.maxとスプレッド構文で絞り、limitと比較


function smallEnough(a, limit){
  return Math.max(...a) <= limit ? true : false;
}



// best
// 条件式だけでtrue, falseが返るので三項演算子必要ない

function smallEnough(a, limit){
  return Math.max(...a) <= limit
}




