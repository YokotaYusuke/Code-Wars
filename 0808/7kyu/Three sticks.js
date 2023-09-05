// test


const { assert } = require("chai");

describe("Tests", () => {
  it("Sample tests", () => {
    assert.closeTo(maxlen(5, 12), 5, 1e-9, '(5, 12)');
    assert.closeTo(maxlen(12, 5), 5, 1e-9, '(12, 5)');
  });
});



// あなたに2本の棒が与えられたと想像してください。最終的には同じ長さの 3 本の棒が必要になります。
// これを達成するためにスティックの一方または両方を切断することができ、残った部分は捨てることができます。

// 2 本の棒の長さ (L1 と L2、どちらも正の値) を取得する関数 maxlen を作成し、3 本の棒を作成できる最大の長さを返します。


// ????



function maxlen(l1, l2) {
  let num = 0;
  (l1 / 3) > l2 ? num = (l1 / 3) : (l2 / 3) > l1 ? num = (l2 / 3) : (l1 > l2) ? num = (l1 / 2) : num = (l2 / 2)
  return num;
}
