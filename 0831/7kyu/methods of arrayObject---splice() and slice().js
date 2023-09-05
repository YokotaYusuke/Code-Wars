// Training JS #24: methods of arrayObject---splice() and slice()


// pop(),push(),shift(),unshift()

// デメリット：要素を順番に追加・削除が出来ない

// 配列内の任意の場所で要素を追加削除するには。

// splice()
// 破壊的メソッドなのでforループの時に要素の数が変わると、回数が減ったりする

// 一次元配列ならslice()で配列をコピーする

// 元の配列を変更しないことは良い習慣

// test

describe("Tests", () => {
  it("test", () => {
    Test.assertSimilar(threeInOne( [1,2,3] ) , [6]);
    Test.assertSimilar(threeInOne( [1,2,3,4,5,6] ) , [6,15]);
    Test.assertSimilar(threeInOne( [1,2,3,4,5,6,7,8,9] ) , [6,15,24]);
    var arr1=[1,3,5,2,4,6,7,7,7],copy=arr1.slice();
    Test.assertSimilar(threeInOne(arr1) , [9,12,21]);
    Test.assertSimilar(arr1 , copy);

  });
});

// 元の配列が変更されていないかテストを追加するのが良い！



// mine

function threeInOne(arr){
  const copyArr = arr.slice();
  const result = [];
  let sum = 0;
  let i = 0;
  
  for(const num of copyArr) {
    if(i < 2) {
      sum += num;
      i++;
    } else {
      sum += num
      result.push(sum);
      i = 0;
      sum = 0;
    }
  }
  return result;
}




// best

function threeInOne(arr){
  var result = [];
  for(var i=0;i<arr.length;i+=3) {
    result.push(arr[i] + arr[i+1] + arr[i+2]);
  }
  return result
}

// mine2

function threeInOne(arr){
  const result = [];
  for(let i = 0; i < arr.length; i+=3) {
    result.push(arr[i] + arr[i + 1] + arr[i + 2]);
  }
  return result;
}



// other

function threeInOne(arr){
  var newArr = arr.slice();
  var arrs = []
  for (var i=0;i<arr.length/3;i++) {    
    arrs.push(newArr.splice(0,3).reduce(function(a, b) { return a + b; }, 0))
  }
  return arrs; 
}











