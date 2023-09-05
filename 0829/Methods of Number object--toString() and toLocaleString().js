// test


// toString()とtoLocaleString()について

// 使用方法：数値を文字列に変換する事


// 仕様パターン

// num.toString();
// num.toLocaleString();
// num+"" =>文字列に変換される



// toString(radix)

// radixは2進数や8進数、16進数に変換できる




// test


describe("Tests", () => {
  it("test", () => {
    Test.assertSimilar(colorOf(255,0,0), "#ff0000");
    showColor("#ff0000")
    Test.assertSimilar(colorOf(0,111,0), "#006f00");
    showColor("#006f00")
    Test.assertSimilar(colorOf(1, 2 ,3), "#010203");
    showColor("#010203")
  });
});



// mine

// padStart
// 指定した文字数になるよう、先頭に指定した値を結合

function colorOf(...num){
  return "#" + num.map(x => x.toString(16).padStart(2,"0")).join("");
}



// best

function colorOf(r,g,b){
  //coding here
  return '#'+r.toString(16).padStart(2,0)+g.toString(16).padStart(2,0)+b.toString(16).padStart(2,0);
}


// other

function colorOf(r,g,b)
{
  return "#" + toHex(r)+ toHex(g)+ toHex(b);  
}

function toHex(n)
{
  var result = n.toString(16);
  return result.length == 1 ? "0" + result : result;  
}
























