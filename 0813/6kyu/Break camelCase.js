// test



const chai = require("chai");
const assert = chai.assert;

describe("Sample Tests", () => {
  it("Should pass sample tests", () => {
    assert.strictEqual(solution('camelCasing'), 'camel Casing', 'Unexpected result')
    assert.strictEqual(solution('camelCasingTest'), 'camel Casing Test', 'Unexpected result')
  });
});








// mine


function solution(string) {
  const checkStr = string.toUpperCase();
  return [...string].reduce((a,b,i) => {
    return  b === checkStr[i] ? a + " " + b : a + b;
  },"");
}



// best
// 天才．replaceで大文字が来たら、半角付きの文字にする
// $1は何？
// $n => n 番目（1 基点）にキャプチャされた文字列を挿入します。n は 100 未満の正の整数です。

// キモ：正規表現で[A-Z]を()で囲いグループ化している．単語ごとにチェック出来るようにしている


function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));
}










