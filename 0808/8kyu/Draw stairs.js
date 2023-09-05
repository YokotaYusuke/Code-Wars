// Given a number n, draw stairs using the letter "I",
// n tall and n wide, with the tallest in the top left.
// For example n = 3 result in:


// mine

function drawStairs(n) {
  const result = [];
  let blankStr = "";
  
  for(let i = 1; i <= n; i++) {
    if(i !== n) {
      result.push("I" + "\n" + blankStr);
      blankStr += " ";
    } else {
      result.push("I");
    }
  }
  return result.join(" ");
}



// repeat() メソッドは、呼び出し元の文字列を指定した数だけコピーして結合した新しい文字列を構築して返します。

// best answer

const drawStairs = n => [...Array(n)].map((_, i) => " ".repeat(i) + "I").join("\n");


// other
// 1

function drawStairs(n) {
  let result = [];
  
  for (let i = 0; i < n; i++) {
    result[i] = `${' '.repeat(i)}I`;
  }
  
  return result.join('\n');
}


// 2

function drawStairs(n) {

  let step = "I"
  for(let i=1; i<n;  i++) {
   step +="\n" + " ".repeat(i) + 'I' ;
  }return step 
  }


