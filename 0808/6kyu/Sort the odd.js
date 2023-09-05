// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Sample Tests", () => {
  it("should pass some sample tests", () => {
    assert.deepEqual(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
    assert.deepEqual(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
    assert.deepEqual(sortArray([]),[]);
  });
});


// mine

// 偶数と奇数の配列をつくる
// 奇数の配列は昇順に並び替え
// forEachで並び変えた奇数の配列に偶数の要素を元の位置にspliceで差し込む
// 複数呼ばれた時にindexOfは初めの要素を参照してしまうので、一度呼ばれたら""で置き換えて
// 配列の数が変わらないようにした

function sortArray(array) {
  const copyArr = array.slice();
  const evenArr = array.filter(element => element %2 === 0);
  const oddArr = array.filter(element => element %2 !== 0);
  const newArr =oddArr.sort((a,b) => a - (b));
  
  evenArr.forEach(element => {
    newArr.splice(copyArr.indexOf(element), 0, element);
    copyArr.splice(copyArr.indexOf(element), 1, "");
  });
  return newArr;
}



// best
// array.shift()を使っている
// shift()は配列から最初の要素を削除する

// 奇数の配列をつくる
// 元の配列の要素に順番に2で割った余りが1なら奇数の要素を入れる
// 

function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
  return array.map((x) => x % 2 ? odd.shift() : x);
}


// other1

function sortArray(array) {
  var odds = [];
  //loop, if it's odd, push to odds array
  for (var i = 0; i < array.length; ++i) {
    if (array[i]%2 !== 0) {
      odds.push(array[i]);
    }
  }
  //sort odds from smallest to largest
  odds.sort(function(a,b){
    return a-b;
  });
  
  //loop through array, replace any odd values with sorted odd values
  for (var j = 0; j < array.length; ++j) {
    if (array[j]%2 !== 0) {
      array[j] = odds.shift();
    }
  }
  
 return array;
}

// other2

function sortArray(array) {
  var odd = array.filter(elem => elem % 2 !== 0).sort((a, b) => a - b);
  return array.map(elem => elem % 2 === 0 ? elem : odd.shift());
}















