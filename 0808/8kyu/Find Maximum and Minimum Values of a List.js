// test

const Test = require('@codewars/test-compat');

describe("Test", function(){
  it("Examples", function(){
    Test.assertEquals(min([-52, 56, 30, 29, -54, 0, -110]), -110);
    Test.assertEquals(min([42, 54, 65, 87, 0]), 0);
    Test.assertEquals(max([4,6,2,1,9,63,-134,566]), 566);
    Test.assertEquals(max([5]), 5);
  });
});




// mine
// スプレッド構文
// 配列や文字列の反復可能オブジェクトを展開できる
// 一つ一つの要素として展開　value1,value2,value3.....

var min = function(list){
  return Math.min(...list);
}

var max = function(list){
  return Math.max(...list);
}


// best

const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);