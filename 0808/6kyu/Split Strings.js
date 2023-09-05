// test

const { assert } = require('chai');

describe("Split Strings", () => {
  it("Basic tests", () => {
    assert.deepEqual(solution("abcdef"), ["ab", "cd", "ef"]);
    assert.deepEqual(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
    assert.deepEqual(solution(""), []);
  });
});


// mine

function solution(str){
  const arr = str.split("");
  const result = [];
  
  for(let i = 0; i < arr.length; i+=2) {
    result.push(arr[i] + (arr[i + 1] || "_"));
  }
  return result;
}



// best
// 正規表現=> これはすごい

function solution(s){
  return (s+"_").match(/.{2}/g)||[]
}



// other

function solution(str){
  var i = 0;
  var result = new Array();
  if (str.length % 2 !== 0) {
    str = str + '_';
  }
  while (i < str.length) {
      result.push(str[i] + str[i+1]);
      i += 2;
    }
  return result;
}


