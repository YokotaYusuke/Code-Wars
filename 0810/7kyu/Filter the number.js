// test


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Sample Tests", function() {
  it("should pass some sample tests", function() {
    assert.strictEqual(filterString("123"), 123, 'Just return the numbers');
    assert.strictEqual(filterString("a1b2c3"), 123, 'Just return the numbers');
    assert.strictEqual(filterString("aa1bb2cc3dd"), 123, 'Just return the numbers');
  });
});



// mine
// 正規表現で配列の要素が0-9に一致するか判定して、一致した場合は文字列結合
// 文字列結合した数値を数値型に直して出力

var filterString = function(value) {
  let result = "";
  
  [...value].forEach((element, i) => {
    /[0-9]/g.test(element) ? result += element : "";
  });
  
  return Number(result);
}


// best
// replace()は元の文字列は変更されない。戻り値は置き換え後の新しい文字列を返す
// 数値以外を全て削除した後にparseIntで数値型に変換

var FilterString = function(value) {
  return parseInt(value.replace(/[^\d]/g, ""))
}


// other

const FilterString = value => +value.replace(/\D/g, '');

