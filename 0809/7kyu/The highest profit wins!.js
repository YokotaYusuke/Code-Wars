// test

const assert = require('chai').assert;

describe("minMax", () => {
  const testCases = [
    [[1, 2, 3, 4, 5], [1, 5]],
    [[2334454, 5], [5, 2334454]],
    [[5], [5, 5]]
  ];
  for(const [input, expected] of testCases) {
    it(`should work for ${JSON.stringify(input)}`, () => {
      assert.deepEqual(minMax(input), expected);
    });
  }
});



// mine

// 配列の中の最小値と最大値を格納し
// [最小値、最大値]で返す

function minMax(arr){
  const minNum = Math.min(...arr);
  const maxNum = Math.max(...arr);
  
  return [minNum, maxNum];
}


// best

function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)];
}


// other


function minMax(arr) {
  var a = arr.sort(function(a,b) {return a-b});
  return [a[0], a[a.length-1]];
}