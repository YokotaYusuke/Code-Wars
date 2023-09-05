// test


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual( isIsogram("Dermatoglyphics"), true );
    assert.strictEqual( isIsogram("isogram"), true );
    assert.strictEqual( isIsogram("aba"), false, "same chars may not be adjacent" );
    assert.strictEqual( isIsogram("moOse"), false, "same chars may not be same case" );
    assert.strictEqual( isIsogram("isIsogram"), false );
    assert.strictEqual( isIsogram(""), true, "an empty string is a valid isogram" );
  });
});



// mine


function isIsogram(str){
  const arr = str.split("");
  let judge = true;
  
  let lowerArr = arr.map(element => {
    return element.toLowerCase();
  });
  
  lowerArr.sort().reduce((a,b,index,arr) => {
    judge === true && b === arr[index + 1] ? judge = false : "";
  },"");
  
  return judge;
}


// best
// str.toUpperCase()で全てのアルファベットを大文字にそろえる
// new Set()オブジェクトで一意の値の配列を作成
// Set().sizeでSetオブジェクト内の要素数を返す
// ユニークな配列の数と与えられた配列の数が等しい時は true , 等しくない時はfalseを返す


function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}


// other

function isIsogram(str){ 
  return !/(\w).*\1/i.test(str)
}
//z.

// other2

function isIsogram(str){
  return !str.match(/([a-z]).*\1/i);
}









