// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(squareSum([1,2]), 5);
    assert.strictEqual(squareSum([0, 3, 4, 5]), 50);
    assert.strictEqual(squareSum([]), 0);
  });
});



// mine1
// reduce

function squareSum(numbers){
  return numbers.reduce((a,b) => a + b * b,0);
}

// mine2
// forEach

function squareSum(numbers){
  let sum = 0;
  numbers.length !== 0 ? numbers.forEach(element => sum += element**2) : sum = 0;
  return sum;
}


// best
// reduce

function squareSum(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)
}


function squareSum(numbers){
  return numbers.reduce((sum,num) => sum + (num * num), 0);
}