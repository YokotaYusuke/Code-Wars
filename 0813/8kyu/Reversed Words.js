// test


const { assert } = require('chai');

describe("reverseWords",function(){
  it("should work for some examples", function(){
    assert.strictEqual(reverseWords("hello world!"                 ),  "world! hello")
    assert.strictEqual(reverseWords("yoda doesn't speak like this" ),  "this like speak doesn't yoda")
    assert.strictEqual(reverseWords("foobar"                       ),  "foobar")
    assert.strictEqual(reverseWords("kata editor"                  ),  "editor kata")
    assert.strictEqual(reverseWords("row row row your boat"        ),  "boat your row row row")
    assert.strictEqual(reverseWords(""                             ),  "")
  });
});






// mine

function reverseWords(str){
  return str.split(" ").reverse().join(" ");
}


// best

function reverseWords(str){
  return str.split(' ').reverse().join(' ');
}







