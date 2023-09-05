// test

describe("Tests", () => {
  it("test", () => {
    Test.assertSimilar(firstToLast("ababc","a") , 2);
    Test.assertSimilar(firstToLast("ababc","c") , 0);
    Test.assertSimilar(firstToLast("ababc","d") , -1);
  });
});



// mine

function firstToLast(str,c){
  return str.indexOf(c) === -1 ? -1 : str.lastIndexOf(c) - str.indexOf(c);
}


// best


function firstToLast(str, c) {
  return str.lastIndexOf(c) - Math.max(0, str.indexOf(c));
}