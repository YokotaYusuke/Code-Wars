// test


const Test = require('@codewars/test-compat');

describe("FindEvenIndex", function() {
  it("Tests", function() {
    Test.assertEquals(findEvenIndex([1,2,3,4,3,2,1]),3, "The array was: [1,2,3,4,3,2,1] \n");
    Test.assertEquals(findEvenIndex([1,100,50,-51,1,1]),1, "The array was: [1,100,50,-51,1,1] \n");
    Test.assertEquals(findEvenIndex([1,2,3,4,5,6]),-1, "The array was: [1,2,3,4,5,6] \n");
    Test.assertEquals(findEvenIndex([20,10,30,10,10,15,35]),3, "The array was: [20,10,30,10,10,15,35] \n");
  });
});



// mine
// ifで書くより三項演算子で書いた方が処理が早い
// 左辺の空の配列を用意する。右辺の配列は元の配列。
// 左辺の配列の合計値と右辺の配列-現在チェック中の要素を引いた合計値が等しい　かつ　index番号がまだ見つかっていない状態
// に限り、インデックス番号を書き換える。
// 空の配列に先ほどチェックした要素を追加して、元の配列は0に置き換える。この処理を繰り返し行う。

function findEvenIndex(arr) {
  let index = -1;
  const arr2 = [];
  
  arr.forEach((element, i) => {
    arr2.reduce((a,b) => a + b,0) === arr.reduce((a,b) => a + b,0) - element && index === -1 ? index = i : "";
    arr2.push(arr.splice(i, 1, 0)[0]);
  });
  return index;
}


// best

function findEvenIndex(arr)
{
  var left = 0, right = arr.reduce(function(pv, cv) { return pv + cv; }, 0);
  for(var i = 0; i < arr.length; i++) {
      if(i > 0) left += arr[i-1];
      right -= arr[i];
      
      if(left == right) return i;
  }
  
  return -1;
}


// other
// 配列の要素を全て合計するsum関数を作って計算

const sum = (a, from, to) => a.slice(from, to).reduce((a, b) => a + b, 0)
const findEvenIndex = a => a.findIndex((el, i) => sum(a, 0, i) === sum(a, i + 1));



























