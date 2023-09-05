// test


describe("Tests", () => {
  it("test", () => {
  Test.assertEquals(diagonalSum([[12]]), 12)
  Test.assertEquals(diagonalSum([[1, 2], [3, 4]]), 5)
  Test.assertEquals(diagonalSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), 15)
  Test.assertEquals(diagonalSum([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]), 34)

  });
});




// mine

function diagonalSum(matrix){
  const arr = matrix.map((element,index) => {
    return element.reduce((a,b,i) => i === index ? a + b : a,0);
  });
  return arr.reduce((a,b) => a + b,0);
}

// mine2

function diagonalSum(matrix){
  return matrix.reduce((a,b,i) => {
    return a + b[i];
  },0)
}


// best

function diagonalSum(m){
  return m.reduce(function(s,r,i){return s+r[i]},0)
}


// other

function diagonalSum(matrix){
  return matrix.reduce(function(r, v, i){
    return r + v[i];
  }, 0);
}