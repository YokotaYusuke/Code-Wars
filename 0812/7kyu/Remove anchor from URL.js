// test


const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(removeUrlAnchor('www.codewars.com#about'), 'www.codewars.com')
    assert.strictEqual(removeUrlAnchor('www.codewars.com/katas/?page=1#about'), 'www.codewars.com/katas/?page=1')
    assert.strictEqual(removeUrlAnchor('www.codewars.com/katas/'), 'www.codewars.com/katas/')
    })
  })








// mine

function removeUrlAnchor(url){
  const arr = url.split("");
  arr.includes("#") ? arr.splice(arr.indexOf("#")) : "";
  return arr.join("");
}


// best
// これは凄い．splitで#で分けて先頭を選べば後ろは捨てられる....!!要素を選ぶから文字列で出力できる

function removeUrlAnchor(url){
  return url.split('#')[0];
}


// other

function removeUrlAnchor(url){
  // TODO: complete
  return url.replace(/#.*/gi,"");
}