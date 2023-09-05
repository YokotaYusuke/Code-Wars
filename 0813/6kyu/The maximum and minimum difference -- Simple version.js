// test


const Test = require('@codewars/test-compat');

describe("Basic Tests", function(){
  it("It should works for basic tests", function(){
  
   Test.assertDeepEquals(maxAndMin([3,10,5],[20,7,15,8]) , [17,2])
   Test.assertDeepEquals(maxAndMin([3],[20]) , [17,17])
   Test.assertDeepEquals(maxAndMin([3,10,5],[3,10,5]) , [7,0])
   Test.assertDeepEquals(maxAndMin([1,2,3,4,5],[6,7,8,9,10]) , [9,1])
   
})})





// mine


function maxAndMin(arr1,arr2){
  // [arr2 max - arr1 min, arr1 max - arr2 (arr1 max > arr2 max)]
  const arr1Min = Math.min(...arr1);
  const arr1Max = Math.max(...arr1);
  const arr2Max = Math.max(...arr2);
  const arr2Min = arr2.sort((a,b) => b - a).filter(element => arr1Max - element > 0)[0] || Math.min(...arr2);;
  console.log(arr2Min)
  return [arr2Max - arr1Min, arr1Max - arr2Min];
}