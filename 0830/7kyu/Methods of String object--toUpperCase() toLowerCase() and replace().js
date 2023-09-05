// test

describe("Tests", () => {
  it("test", () => {
    Test.assertSimilar(alienLanguage("My name is John") , "My NAMe Is JOHn");
    Test.assertSimilar(alienLanguage("this is an example") , "THIs Is An EXAMPLe");
    Test.assertSimilar(alienLanguage("Hello World") , "HELLo WORLd");
    Test.assertSimilar(alienLanguage("HELLO WORLD") , "HELLo WORLd");

  });
});


// 単語の始まりを検索
// /\b\w/g

// 単語の終わりを検索
// /\w\b/g

// mine

function alienLanguage(str) {
  return str.toUpperCase().replace(/\w\b/g, (x) => x.toLowerCase())
}



// memo

// 文字列の先頭を大文字にする
// 1.文字列もインデックス番号でアクセスできるのでstr[0].toUpperCase()で大文字にして
// 2.slice(1)で2文字目以降の文字を結合する

// let str = "this is an example.";
// let result = str[0].toUpperCase()+str.slice(1);



// もっとも簡単な方法

// replace()と正規表現で置き換え

// メリット：文字列を分割したり、結合する処理が不要になる


let str = "this is an example.";
let result = str.replace(/\b\w/g, x => x.toUpperCase());

console.log(result);
























