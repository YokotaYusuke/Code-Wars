// test

"use strict";

const strictEqual = require('chai').assert.strictEqual;

function doTest (triplet, expected) {
	const actual = gimme(triplet);
	strictEqual(actual, expected, `for [${triplet}], expected ${expected} but got ${actual}`);
}

describe("Basic Test", function () {
	it("Tests for integers", function () {
		doTest([2, 3, 1], 0);
		doTest([5, 10, 14], 1);
	});
	it("Tests for floats", function () {
		doTest([2.1, 3.2, 1.4], 0);
		doTest([5.9, 10.4, 14.2], 1);
	});
	it("Tests for negative numbers", function () {
		doTest([-2, -3, -1], 0);
		doTest([-5, -10, -14], 1);
	});
	it("Tests for mixed numbers", function () {
		doTest([-2, -3.2, 1], 0);
		doTest([-5.2, -10.6, 14], 0);
	});
});


// mine

// sort()は元の配列を変更するので、コピーを生成
// ソート後の真ん中の要素が元の配列のどの位置に有るか
// indexOf()で検索している

function gimme (triplet) {
  let arr = triplet.slice();
  return arr.indexOf(triplet.sort((a,b) => a - b)[1]);
}


// best
// 自分とやり方ほぼ同じだけど、concatを使っている

function gimme(a) {
  return a.indexOf(a.concat().sort(function(a, b) { return a - b })[1])
}


// other

const gimme = function (arr) {
  return arr.indexOf([...arr].sort((x, y) => x > y)[1]);
};














