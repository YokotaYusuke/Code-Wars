// test


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Example Tests", () => {
  it("Tests", () => {
    assert.strictEqual(findUniq([ 1, 0, 0 ]), 1);
    assert.strictEqual(findUniq([ 0, 1, 0 ]), 1);
    assert.strictEqual(findUniq([ 0, 0, 1 ]), 1);
    assert.strictEqual(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
    assert.strictEqual(findUniq([ 1, 1, 2, 1, 1 ]), 2);
    assert.strictEqual(findUniq([ 3, 10, 3, 3, 3 ]), 10);
  });
});



// mine
// timed out

function findUniq(arr) {
  let uniqNum = 0;
  
  arr.forEach((element, i) => {
    arr.splice(i, 1);
    arr.indexOf(element) === -1 ? uniqNum = element : "";
    arr.splice(i, 0, element);
  });
  return uniqNum;
}

// success
// spliceで両方要素を置き換えるように変更したら処理時間が短くなった。

function findUniq(arr) {
  let uniqNum = 0;
  
  arr.forEach((element, i) => {
    arr.splice(i, 1, "");
    if(arr.indexOf(element) === -1) uniqNum = element;
    arr.splice(i, 1, element);
  });
  return uniqNum;
}


// best
// 他の値は全て同じ数字なので、1番目の要素と2番目の要素が同じだったら
// その時点で最後の要素が一意
// 1番目の要素と2番目の要素を比較して異なる値だったら1番目の要素が一意

function findUniq(arr) {
  arr.sort((a,b)=>a-b);
  return arr[0]==arr[1]?arr.pop():arr[0]
}



// other1

function findUniq(arr) {
  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}

// other2

function findUniq(arr) {
  let [a,b,c] = arr.slice(0,3);
  if( a != b && a!=c ) return a;
  for( let x of arr ) if( x!=a ) return x
}

// other3

function findUniq(arr) {
  return +arr.filter( (value) => { return arr.indexOf(value) == arr.lastIndexOf(value) } );
}

// other4
// sort()で並び替えて同じ数字が

function findUniq(arr) {
  arr = arr.sort()
  if (arr[0] === arr[1]){
    return arr[arr.length -1]
  } else {
    return arr[0]
  } 
}


