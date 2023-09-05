// test


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("test", () => {
    assert.deepEqual(uniqueInOrder('AAAABBBCCDAABBB'), ['A','B','C','D','A','B'])
  });
});



// mine
// 渡される引数が配列の時はそのままarrに入れる。文字列の時はsplitで分割
// 作成した配列に対してforEachで最後尾の要素が元の配列の要素と異なる時のみ
// 新しい配列に追加する

var uniqueInOrder=function(iterable){
  const arr = typeof iterable !== "object" ? iterable.split("") : iterable;
  const result = [];
  arr.forEach((element, i) => {
    result[result.length-1] !== element ? result.push(element) : "";
  });
  return result;
}


// best

var uniqueInOrder=function(iterable){
  return [...iterable].filter((a, i) => a !== iterable[i-1])
}


// other1

function uniqueInOrder(it) {
  var result = []
  var last
  
  for (var i = 0; i < it.length; i++) {
    if (it[i] !== last) {
      result.push(last = it[i])
    }
  }
  
  return result
}


// other2

var uniqueInOrder = function (iterable)
{
	return [].filter.call(iterable, (function (a, i) { return iterable[i - 1] !== a }));
}