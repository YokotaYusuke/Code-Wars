// test

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
// Create your own tests here. These are some of the methods available:
//  Test.expect(boolean, [optional] message) 
//  Test.assertEquals(actual, expected, [optional] message)
//  Test.assertSimilar(actual, expected, [optional] message)
//  Test.assertNotEquals(actual, expected, [optional] message)
Test.assertEquals(new Ball().ballType, "regular");
Test.assertEquals(new Ball("super").ballType, "super");
  });
});


// mine
// クラス定義でfunctionキーワードで作る

var Ball = function(ballType) {
  this.ballType = ballType || "regular";
};


// best

var Ball = function(ballType) {
  this.ballType = ballType || 'regular';
};