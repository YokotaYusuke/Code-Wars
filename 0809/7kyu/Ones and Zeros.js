// test

const Test = require('@codewars/test-compat');

describe("One's and Zero's", () => {

  it("Example tests", () => {
      Test.assertEquals(binaryArrayToNumber([0,0,0,1]), 1);
      Test.assertEquals(binaryArrayToNumber([0,0,1,0]), 2);
      Test.assertEquals(binaryArrayToNumber([1,1,1,1]), 15);
      Test.assertEquals(binaryArrayToNumber([0,1,1,0]), 6);
  });

});



// mine

// 2進数を10進数に変換する方法

// parseInt(string, radix)を使う
// 引数は文字列でよい、radixに変換したい

const binaryArrayToNumber = arr => {
  const str = arr.join("");
  return parseInt(str, 2);
};


// best

const binaryArrayToNumbe_r = arr => parseInt(arr.join(''), 2);



// other

const binaryArrayTo_Number = arr => {
  return parseInt(Number(arr.join('')), 2)
};

