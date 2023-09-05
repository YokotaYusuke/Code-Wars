// test


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(high('man i need a taxi up to ubud'), 'taxi');
    assert.strictEqual(high('what time are we climbing up the volcano'), 'volcano'); 
    assert.strictEqual(high('take me to semynak'), 'semynak');   
    assert.strictEqual(high('aa b'), 'aa');
    assert.strictEqual(high('b aa'), 'b');
    assert.strictEqual(high('bb d'), 'bb');
    assert.strictEqual(high('d bb'), 'd');
    assert.strictEqual(high('aaa b'), 'aaa');
  })
});


// mine


function high(x){

  const lowerStr = "abcdefghijklmnopqrstuvwxyz";
  const xArr = x.split(" ");
    
  const numArr = xArr.map(element => {
      return [...element].reduce((a,b) => {
        return a + lowerStr.indexOf(b) + 1;
      },0);
    });
  
  const max = Math.max(...numArr);
    
  return xArr.reduce((a, b, i) => {
     return a === "" && max === numArr[i] ? b : a;
    },"");
  }


// best

function high(s){
  let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
  return s.split(' ')[as.indexOf(Math.max(...as))];
}


// other

function high(x){
  return x.split(' ').reduce((accum, current)=>{
      return score(current) > score(accum)? current:accum;  
  })
}

function score(word){
  return word.split('').reduce((accum,current)=>{return accum+(current.charCodeAt()-96)},0)
}


// other

function high(x){
  return x.split(' ').reduce((accum, current)=>{
      return score(current) > score(accum)? current:accum;  
  })
}

function score(word){
  return word.split('').reduce((accum,current)=>{return accum+(current.charCodeAt()-96)},0)
}









