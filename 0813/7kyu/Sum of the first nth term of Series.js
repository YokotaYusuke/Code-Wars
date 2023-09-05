// test



const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(SeriesSum(1), "1.00")
Test.assertEquals(SeriesSum(2), "1.25")
Test.assertEquals(SeriesSum(3), "1.39")
Test.assertEquals(SeriesSum(4), "1.49")
  });
});




// mine


// toFixed(小数点の桁数)で指定した小数点の桁数にする
// ?????????????????????????

function SeriesSum(n) {
  let sum = 1;
  let z = 0;
  for(i = 1; i <= n; i++) {
    sum += z;
    z = 1 / (4 + i*3);
    console.log(z)
    z = Number(z.toFixed(2));
  }
  return String(sum);
}