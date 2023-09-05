// test

const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(toCamelCase(''), '', "An empty string was provided but not returned")
    assert.strictEqual(toCamelCase("the_stealth_warrior"), "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
    assert.strictEqual(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
    assert.strictEqual(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value")
  });
});



// mine

// strが空の時は空を返しそれ以外の時は-もしくは_で文字列を分割して配列にする
// 各要素の先頭の文字が小文字かどうか正規表現で判定して小文字の場合は先頭の文字をsubstringで書き換え
// 大文字の場合はそのまま

function toCamelCase(str){
  return str === "" ? "" : str.split(/-|_/g).map((element, i) => i !== 0 && /^[a-z]/.test(element) ? element.substring(0,1).toUpperCase()+element.substring(1) : element).join("");
}

// mine2

function toCamelCase(str){
  const regExp = /[-_]\w/ig;
  return str.replace(regExp, function(word) {
    return word.charAt(1).toUpperCase();
  });
}


// best
// 正規表現とcharAtが分からん....


function toCamelCase(str){
  var regExp=/[-_]\w/ig;
  return str.replace(regExp,function(match){
        return match.charAt(1).toUpperCase();
   });
}

// other

function toCamelCase(str){
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}