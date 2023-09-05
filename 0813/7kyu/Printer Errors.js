// test


const Test = require('@codewars/test-compat');

describe("printerError",function() {
it("Basic tests",function() {   
    var s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
    Test.assertEquals(printerError(s), "3/56")
})})




// mine


function printerError(s) {
  //   const regExp = /[aaabbbbhaijjjm]/ig
  //   const regExp = /(a{3})(b{4})(h)(a)(i)(j{3})(m)/g
  //   const regExp = /aaabbbbhaijjjm/g
    const regExp = "aaabbbbhaijjjm";
    const zzz = [...regExp].reduce((a,b,i) => {
      console.log(i)
      console.log(a)
      return [...s][i] === b && a.length === i ? a : a + b
    },"")
    console.log(zzz.length);
    return `1/${s.length}`
  }







