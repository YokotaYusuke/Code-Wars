// test


const Test = require('@codewars/test-compat');

describe("doubleChar", function() {
  it("works for some examples", function() {
    Test.assertEquals(doubleChar("abcd"), "aabbccdd");
    Test.assertEquals(doubleChar("Adidas"), "AAddiiddaass");
    Test.assertEquals(doubleChar("1337"), "11333377");
    Test.assertEquals(doubleChar("illuminati"), "iilllluummiinnaattii");
    Test.assertEquals(doubleChar("123456"), "112233445566");
    Test.assertEquals(doubleChar("%^&*("), "%%^^&&**((");
  });
});



// mine
// repeatで2回呼び出しして出力

function doubleChar(str) {
  return [...str].reduce((a,b,i) => {
    return a + b.repeat(2);
  },"");
}


// best

const doubleChar = (str) => str.split("").map(c => c + c).join("");