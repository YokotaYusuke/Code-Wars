// test


const strictEqual = require('chai').assert.strictEqual;

function doTest(array, expected) {
	const log = `for array :\n["${array[0]}", "${array[1]}"]\n`;
	const actual = transposeTwoStrings(array);
	strictEqual(actual, expected, log);
}

describe("Tests suite", function () {
	it("sample tests", function () {
		doTest(['Hello', 'World'], "H W\ne o\nl r\nl l\no d");
		doTest(['joey', 'louise'], "j l\no o\ne u\ny i\n  s\n  e");
		doTest(['a', 'cat'], "a c\n  a\n  t");
		doTest(['cat', ''], "c  \na  \nt  ");
		doTest(['!a!a!', '?b?b'], "! ?\na b\n! ?\na b\n!  ");
	});
});




// mine


function transposeTwoStrings (array) {
  const count = Math.max(array[0].length,array[1].length);
  let result = "";
  
  for(let i = 0; i < count; i++) {
    result += (array[0][i] || " ") + " " + (array[1][i] || " ") + (count-1 > i ? "\n" : "") ;
  }
  
  return result;
}


// best

function transposeTwoStrings(arr){
  var result = [];
  var len = Math.max(arr[0].length, arr[1].length);
  
  for (var i = 0; i < len; i++) {
    var column = (arr[0][i] || " ") + " " + (arr[1][i] || " ");
    result.push(column);
  }
  
  return result.join("\n");
}