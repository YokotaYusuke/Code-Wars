// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Example tests", () => {
  it("Test 1", () => {
    assert.strictEqual(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");
  });
  it("Test 2", () => {
    assert.strictEqual(highAndLow("1 2 3"), "3 1");
  });
});


// mine
// 合えてMath.maxを使わない方法で解く

// 数値の入った文字列を空白区切りで配列にする
// 配列を降順で並び替える
// 最後に一番大きい数値と小さい数値を足して出力

function highAndLow(numbers){
  const arr = numbers.split(" ").sort((a,b) => b - a);
  return arr[0] + " " + arr[arr.length - 1];
}


// other

function highAndLow(numbers){
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}


// other2

function highAndLow(numbers){
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}