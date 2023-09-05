// test


describe("Tests", () => {
  it("test", () => {
Test.assertSimilar(isDivisible(3,3,4),false);
Test.assertSimilar(isDivisible(12,3,4),true);
Test.assertSimilar(isDivisible(8,3,4,2,5),false);
  });
});




// mine

function isDivisible(...n){
  const arr = [];
  n.forEach((element, i) => {
    n[0] % element === 0 ? arr.push(true) : arr.push(false);
  });
  return arr.includes(false) ? false : true;
}

// mine2
function isDivisible(firstN, ...otherN){
  return otherN.every(element => firstN %element === 0);
}


// best
// 初めの要素とそれ以外を切り離して分割代入している
// every()は列内の全ての要素がテストに合格したらtrueを返す

function isDivisible(firstN, ...otherN){
  return otherN.every(n => firstN % n === 0);
}