// test


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(capitals('CodEWaRs'), [0,3,4,6] );
  });
});



// mine

// 文字列を一文字区切りで配列にして、配列の要素に順番に正規表現で大文字(A-Z)の間か
// regExp.test()で判定してtrueなら、判定した要素のインデックス番号を配列に格納

var capitals = function (word) {
  const result = [];
	word.split("").forEach((element, i) => /[A-Z]/g.test(element) ? result.push(i) : "");
  return result;
};

// mine2

var capitals = function (word) {
	return word.split("").reduce((a,b,c) => /[A-Z]/g.test(b) ? a.concat(c) : a, []);
};


// 大文字か判定する手段
// word[i].toUpperCase() == word[i]
// 元の文字を大文字に変換し元の文字と等しいかチェックしても出来る。

// best
// 空の配列を作ってresult.push()しなくても
// concat()で配列に値を連結出来る。

var capitals = function (word) {
	return word.split('').reduce(function(memo, v, i) {
    return v === v.toUpperCase() ? memo.concat(i) : memo;
  }, []);
};

// other1

var capitals = function (word) {
  return word.split('').reduce(function(n, l, i){
    return /[A-Z]/.test(l) && n.push(i), n;
  }, []);
};

// other2

var capitals = function (word) {
  var caps = [];
	for(var i = 0; i < word.length; i++) {
    if(word[i].toUpperCase() == word[i]) caps.push(i);
  }
  return caps;
};









