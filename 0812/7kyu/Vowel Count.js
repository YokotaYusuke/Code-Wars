// test

const {assert} = require("chai");

describe("Vowels Count Tests",function(){
  it("should return 5 for 'abracadabra'",function(){
    assert.strictEqual(getCount("abracadabra"), 5) ;
  });
});



// 文字列の中のa, e, i, o, uの合計数を出力

// mine

function getCount(str) {
  const arr = ["a","e","i","o", "u"];
  return [...str].reduce((a,b) => {
    return arr.includes(b) ? a + 1 : a;
  },0);
}


// best
// matchで正規表現検索．
// matchの戻り値は一致した要素を配列で返す．
// なぜ/[aeiou]/gではなくigなのか
// iは小文字と大文字を区別しない
// igでもgiでもいい

function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}



// other

function getCount(str) {
  return str.replace(/[^aeiou]/gi, '').length;
}














