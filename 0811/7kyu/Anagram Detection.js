// test


const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(isAnagram("foefet", "toffee"), true, 'The word "foefet" is an anagram of "toffee"')
    assert.strictEqual(isAnagram("Buckethead", "DeathCubeK"), true, 'The word "Buckethead" is an anagram of "DeathCubeK"')
    assert.strictEqual(isAnagram("Twoo", "WooT"), true, 'The word "Twoo" is an anagram of "WooT"')

    assert.strictEqual(isAnagram("dumble", "bumble"), false, 'Characters do not match for test case "dumble", "bumble"')
    assert.strictEqual(isAnagram("ound", "round"), false, 'Missing characters for test case "ound", "round"')
    assert.strictEqual(isAnagram("apple", "pale"), false, 'Same letters, but different count')
  });
});


// mine

var isAnagram = function(test, original) {
  return [...test.toUpperCase()].sort().join("") === [...original.toUpperCase()].sort().join("");
};



// best

// write the function isAnagram
var isAnagram = function(test, original) {
  var t = test.toLowerCase().split('').sort().join('');
  var o = original.toLowerCase().split('').sort().join('');
  return (t==o)?true:false;
};



// other

function isAnagram (test, original) {
	return test.toLowerCase().split("").sort().join("") === original.toLowerCase().split("").sort().join("");
}






