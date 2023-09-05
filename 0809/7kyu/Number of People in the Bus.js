// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(number([[10,0],[3,5],[5,8]]),5);
    assert.strictEqual(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]),17);
    assert.strictEqual(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]),21);
    assert.strictEqual(number([[0,0]]),0);
  });
});


// mine


// reduceを使って元の人数は0にしておく、合計値に渡される配列の1番目を足して2番目は引く

var number = function(busStops){
  return busStops.reduce((a,b) => a + b[0]- b[1], 0);
}


// best
// reduceの第二引数が配列の形になっている
// 分割代入？？

const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);