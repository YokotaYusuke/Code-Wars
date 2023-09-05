// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Sample Tests", () => {
  it("test", () => {
    assert.deepEqual(distinct([1]), [1]);
    assert.deepEqual(distinct([1,2]), [1,2]);
    assert.deepEqual(distinct([1,1,2]), [1,2]);
  });
});


// mine

// indexOfで初めに見つかったインデックス番号 = 一番初めの要素
// 次に同じ値が呼ばれたら、インデックス番号が違うのでfalse
// になるから2回目は追加されない

function distinct(a) {
  return a.filter((element,i) => a.indexOf(element) === i);
}



// best

// ...new Set(array)を使う
// Setはあらゆる肩の一意なプリミティブ値やオブジェクト参照を格納する
// setオブジェクトを生成する

function distinct(a) {
  return [...new Set(a)];
}

// other

// Array.fromを使う
// 新しいArrayインスタンスを生成する

function distinct(a) {
  return Array.from(new Set(a));
}









