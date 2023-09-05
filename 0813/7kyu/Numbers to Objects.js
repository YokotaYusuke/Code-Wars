// test


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Numbers  to Objects", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(numObj([118,117,120]),[{'118':'v'}, {'117':'u'}, {'120':'x'}]);
    assert.deepEqual(numObj([101,121,110,113,113,103]),[{'101':'e'}, {'121':'y'}, {'110':'n'}, {'113':'q'}, {'113':'q'}, {'103':'g'}]);
  });
});





// mine

function numObj(s){
  const str = String.fromCodePoint(...s);
  const result = [];
  let i = 0;
  for(const element of s) {
    let obj = {[element] : str[i]};
    result.push(obj);
    i++;
  }
  return result;
}


// mine2
// 要注意！オブジェクトをアロー関数内で宣言するときは()で囲う事を忘れずに！！！！！

function numObj(s){
  return s.map(element => ({[element]:String.fromCodePoint(element)}));
}


// best

function numObj(s){
  return s.map(n => {
    return { [n]: String.fromCharCode(n) };
  });
}


// other

const numObj = ($) => $.map(el => ( {[el]: String.fromCodePoint(el)} ))






