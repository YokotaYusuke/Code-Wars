// Training JS #23: methods of arrayObject---push(), pop(), shift() and unshift()


// push()
// pop()
// shift()
// unshift()

// デメリット
// 処理速度が遅い。大きなデータを扱うときに直接割り当ての方が速い

const arr1 = [];

for (let i = 0; i < 100000; i++) arr1.push(i); // push()

for (let i = 0; i < 100000; i++) arr1[i] = i; // 直接割り当て



// test

describe("Tests", () => {
  it("test", () => {
    Test.assertSimilar(infiniteLoop( [[1,2,3],[4,5,6],[7,8,9]],"left",1) , [[2,3,4],[5,6,7],[8,9,1]]);
    Test.assertSimilar(infiniteLoop( [[1,2,3],[4,5,6],[7,8,9]],"right",1) , [[9,1,2],[3,4,5],[6,7,8]]);
    Test.assertSimilar(infiniteLoop( [[1,2],[3,4,5,6],[7,8,9,10]],"left",2)  , [[3,4],[5,6,7,8],[9,10,1,2]]);

  });
});


// mine


function infiniteLoop(arr,d,n){
  
  for(let i = 0; i < n; i++) {
    switch(d) {
      case "left":
        arr[2].push(arr[0].shift());
        arr[0].push(arr[1].shift());
        arr[1].push(arr[2].shift());
      break;
      
      case "right":
        arr[0].unshift(arr[2].pop());
        arr[1].unshift(arr[0].pop());
        arr[2].unshift(arr[1].pop());
      break;
    }
  }
  
  return arr;
}



// best

function infiniteLoop(arr,d,n){
  for (var i = 1; i <= n; i++){
  if (d === "left"){
    arr[2].push(arr[0].shift());
    arr[1].push(arr[2].shift());
    arr[0].push(arr[1].shift());
  }
  if (d === "right"){
    arr[0].unshift(arr[2].pop());
    arr[1].unshift(arr[0].pop());
    arr[2].unshift(arr[1].pop());
  }
  }
  return arr;
}


















