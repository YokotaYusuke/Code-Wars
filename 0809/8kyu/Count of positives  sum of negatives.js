// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Example tests", () => {
  it("Testing for fixed test 1", () => {
    let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
    let actual = countPositivesSumNegatives(testData);
    let expected = [10, -65];
    assert.deepEqual(actual, expected);
  })
    
  it("Testing for fixed test 2", () => {
    let testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
    let actual = countPositivesSumNegatives(testData);
    let expected = [8, -50];    
    assert.deepEqual(actual, expected);
  });
});


// mine

function countPositivesSumNegatives(input) {
  if(input === null || input.length === 0) return [];
  
  let positiveCount = 0;
  let negativeSum = 0;
  
  positiveCount = input.filter(element => element > 0).length;
  negativeSum = input.reduce((a,b) => b < 0 ? a + b : a, 0);
  
  return [positiveCount, negativeSum];
}


// forof
function countPositivesSumNegatives(input) {
  let count = 0;
  const arr = [];
  const result = [];
  let sum = 0;
  
  if(input === null || input.length === 0) return [];
  
  for(const element of input) {
    typeof element === "number" && element > 0 ? arr.push(element) : "";
  }
  count = arr.length;
  result.push(count);
  
  for(const element of input) {
    element < 0 ? sum += element : "";
  }
  result.push(sum);
  
  return result;
}


// best

function countPositivesSumNegatives(input) {
  if (input == null || input.length == 0)
    return [];
  
  var positive = 0;
  var negative = 0;
  
  for (var i=0, l=input.length; i<l; ++i)
  {
    if (input[i] > 0)
      ++ positive;
    else
      negative += input[i];
  }
  
  return [positive, negative];
}



// other

// input && input.length => input === null || input.length === 0

// 0==falseなのか

function countPositivesSumNegatives(input) {
  return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}




