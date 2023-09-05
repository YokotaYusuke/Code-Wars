// test


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("Fixed Tests", () => {
    assert.strictEqual(removeChar('eloquent'), 'loquen');
    assert.strictEqual(removeChar('country'), 'ountr');
    assert.strictEqual(removeChar('person'), 'erso');
    assert.strictEqual(removeChar('place'), 'lac');
    assert.strictEqual(removeChar('ooopsss'), 'oopss');
  });
});
 


// 簡単だけど勉強になる一番シンプルな書き方はなんだろう
// 文字列の先頭と最後を削除して出力



// mine

function removeChar(str){
  return str.slice(1,str.length-1);
};

// best
// -1で後ろからカウントするのには-を付ければいい！

function removeChar(str) {
  return str.slice(1, -1);
}



