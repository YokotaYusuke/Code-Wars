// test



const assert = require('chai').assert;

describe('summation', function () {
  it('should return the correct total', function () {
    assert.strictEqual(summation(1),  1);
    assert.strictEqual(summation(2),  3);
    assert.strictEqual(summation(8), 36);
  })
})




// mine

var summation = function (num) {
  let sum = 0;
  let count = 1;
  while (count <= num) {
    sum += count;
    count++;
  }
  return sum;
}


// best


var summation = function (num) {
  let result = 0;
  for (var i = 1; i <= num; i++) {
    result += i;
  }
  
  return result;
}


// other

const summation = n => n * (n + 1) / 2;


