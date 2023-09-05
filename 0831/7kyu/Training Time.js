// memo


// スプレッド演算子
// ...

// 残余引数とスプレッド構文の違い

// 残余引数
// スプレッド演算子を関数の引数の中で使う function(...n)
// 無限の数の引数を配列として渡すことが出来る

// スプレッド構文
// スプレッド演算子を配列や文字列で使う [...n] ...n


// test

describe("Tests", () => {
  it("test", () => {
    Test.assertSimilar(shuffleIt([1,2,3,4,5],[1,2]) , [1,3,2,4,5]);
    Test.assertSimilar(shuffleIt([1,2,3,4,5],[1,2],[3,4]) , [1,3,2,5,4]);
    Test.assertSimilar(shuffleIt([1,2,3,4,5],[1,2],[3,4],[2,3]) , [1,3,5,2,4]);

  });
});


// mine
// 要素を入れ替えるarrに対して複数回処理を行うのでループが必要
// ループさせる配列は、残余引数のarraysでreduceで初めに基準のarrを格納する
// arrに対して分割代入で入れ替えるインデックス番号に対して入れ替え後のインデックス番号を
// 指定して入れ替える。最後にaを出力する

function shuffleIt(arr,...arrays){
  return arrays.reduce((a,[num1,num2]) => {
    [a[num1],a[num2]] = [a[num2],a[num1]];
    return a;
  },arr);
}

// mine2

function shuffleIt(arr,...swaps){
  for(const [num1,num2] of swaps) {
    [arr[num1], arr[num2]] = [arr[num2], arr[num1]];
  }
  return arr;
}


// best

var shuffleIt=(arr,...ex)=>{
  for ([a,b] of ex) [arr[a],arr[b]]=[arr[b],arr[a]];
  return arr;
}


// other

function shuffleIt(arr, ...exchanges){
  exchanges.forEach(([i, j]) => [arr[i], arr[j]] = [arr[j], arr[i]]);
  return arr;
}

// other

function shuffleIt(arr,...swaps) {
  return swaps.reduce((a,[i,j])=>([a[i],a[j]] = [a[j],a[i]],a),arr.slice());
}





















