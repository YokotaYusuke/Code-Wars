// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("should test", () => {
    assert.strictEqual(sumMul(0,0),"INVALID");
    assert.strictEqual(sumMul(2,9),20);
    assert.strictEqual(sumMul(4,-7),"INVALID");
  });
});


// mine

function sumMul(n,m){
  const result = [];
  let sum = 0;
  
  if(n <= 0 || m <= 0) return "INVALID";
  
  for(let i = 1; sum < m - n; i++) {
    result.push(n * i);
    sum += n;
  }
  return result.reduce((a,b) => a + b);
}


// best answer
// 加算していくのは1だけじゃなくて、nで加算していけばいい

function sumMul(n,m){
  if (n >= m) return "INVALID";

var sum = 0;
  for (var i = n; i < m; i+=n) {
    sum += i;
  }
  return sum;
}


// other

function sumMul(n,m){
  if (n <= 0 || m <= 0) return "INVALID";
  
  const last = Math.ceil(m/n) * n - n;
  return (last + n) * (last / n) / 2;
}






