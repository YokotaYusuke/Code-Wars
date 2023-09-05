// test



const {assert} = require('chai');

describe('Sample Tests', function() {
  function test(string, expected) {
    it(`string='${string}'`, function() {
      assert.strictEqual(array(string), expected);
    });
  }

  test('', null);
  test('1', null);
  test('A1,B2', null);
  test('1,2,3', '2');
  test('1,2,3,4', '2 3');
  test('A1,B2,C3,D4,E5', 'B2 C3 D4');
  test('A,1,23,456,78,9,Z', '1 23 456 78 9');
});



// mine


function array(string) {
  const arr = string.split(",");
  return arr.length > 2 ? arr.slice(1,-1).join(" ") : null ;
}


// best

// "" == false
// ブランクはfalsy

// その他のfalsy

// false（正確には、変換されずそのまま）
// 0, -0, NaN
// ""
// null
// undefined

function array(arr){
  return arr.split(",").slice(1,-1).join(" ") || null;
}