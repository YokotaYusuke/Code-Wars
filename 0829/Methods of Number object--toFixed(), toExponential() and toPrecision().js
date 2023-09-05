// memo

// toFixed()
// toExponential()
// toPrecision()

// 与えられた数を固定小数点表記を用いて整形する
// 少数の桁数にかかわらず小数点の位置を固定して表示


// 数値を文字列に変換する


// 指数表記
// 通常:−53000
// 指数表記:−5.3×104


// 対象の数字を10倍する計算を「E+」で表し、その計算を何回繰り返すかを「E+」の後の数字で表す、という形



// test

describe("Tests", () => {
  it("test", () => {
    Test.assertSimilar(howManySmaller([1.234,1.235,1.228],1.24), 2);
    Test.assertSimilar(howManySmaller([1.1888,1.1868,1.1838],1.19), 1);
    Test.assertSimilar(howManySmaller([3.1288,3.1212,3.1205],3.1212), 2);

  });
});




// mine
// toFixed(n)で nは小数点以下で残す桁数を指定
// 戻り値は文字列型の数値だが、そのまま比較可能

function howManySmaller(arr,n){
  return arr.reduce((a,b) => {
    if(b.toFixed(2) < n) a++;
    return a;
  },0);
}



// best
// filterで与えられた数よりも小さい要素のみを残している。最終的に残った要素の数をカウントしている
// +x.toFixed(n)で文字列型の数値を数値型に変換している

function howManySmaller(arr,n){
  return arr.filter(x => +x.toFixed(2) < n).length;
}










