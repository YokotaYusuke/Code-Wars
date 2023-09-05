// Training JS #25: methods of arrayObject---reverse() and sort()




// memo

// 並び替えのメソッドにつてい
// reverse()とsort()

// ネストが深い配列のコピーを作成するのに

// スプレッド構文で一度展開して、再度配列に格納
[...array]

// => 深いネストも大丈夫？

// mapを使う方法も有る。mapで新しい配列を作成する
array.map(x => x)

// JSON.stringify()使わなくてもOK
JSON.stringify(array);
JSON.parse(array);

// test


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Sample tests", () => {
  it("Should pass sample tests", () => {
    assert.deepEqual(sortIt([1,1,1,2,2,3]) , [3,2,2,1,1,1]);
    assert.deepEqual(sortIt([1,1,1,2,2,2,3,3,3]) , [3,3,3,2,2,2,1,1,1]);
    assert.deepEqual(sortIt([1,2,3,4,4,5,5,6,6]) , [3,2,1,6,6,5,5,4,4]);
    var arr1=[1,3,3,5,2,2,4,6,6,7,7,7],copy=arr1.slice();
    assert.deepEqual(sortIt(arr1) , [5,4,1,6,6,3,3,2,2,7,7,7]);
    assert.deepEqual(arr1 , copy , "You should not modify the original array");
  });
});





// mine


function sortIt(arr){
  const copyArr = arr.slice();
  const obj = {};
  
  for(const num of arr) {
    obj[num] ? obj[num] += 1: obj[num] = 1;
  }
  
  const arr2 = Object.entries(obj).sort(([k,v],[key,value]) => {
    if(v > value) return v - value;
    return -1;
  });
  
  return arr2.reduce((a,[key,value]) => {
    for(let i = 0; i < value; i++) {
        a.push(+key);
    }
    return a;
  },[]);
}


// mine2

function sortIt(arr){
  const obj = {};
  arr.forEach(x => obj[x] = (obj[x] || 0) + 1);
  
  return arr.slice().sort((a,b) => {
    console.log(obj[a] - obj[b], b - a)
    
    if (obj[a] - obj[b]) return obj[a] - obj[b]
    if (b - a) return b - a;
//     return obj[a] - obj[b] || b - a
  });
}



// best


function sortIt(arr){
  let numberOf = {};
  arr.forEach(x => numberOf[x] = (numberOf[x]||0) + 1);
  return arr.slice().sort((x, y) => numberOf[x] - numberOf[y] || y - x);
}



// other

const sortIt = arr => {
  var res = [...arr];
  res.sort((a,b) => {
    let n = arr.filter(x => x === a).length,
        m = arr.filter(y => y === b).length;
    return n == m ? b - a : n - m;
    });
  return res;
}




// other2

function sortIt(arr){
  var map = new Object();  
  arr.forEach(a => map[a] = isNaN(map[a]) ? 1 : map[a] + 1);    
  return arr.slice().sort((a, b) => map[a] === map[b] ? b - a : map[a] - map[b]);  
}




// other3

function sortIt(arr){
  return arr.slice().sort((x,y)=>arr.filter(z=>z==x).length-arr.filter(z=>z==y).length || y-x);
}




























