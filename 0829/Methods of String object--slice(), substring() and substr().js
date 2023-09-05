// test



describe("Tests", () => {
  it("test", () => {
    Test.assertSimilar(cutIt(["ab","cde","fgh"]) , ["ab","cd","fg"]);
    Test.assertSimilar(cutIt(["abc","defgh","ijklmn"]) , ["abc","def","ijk"]);
    Test.assertSimilar(cutIt(["codewars","javascript","java"]) , ["code","java","java"]);

  });
});


// mine

function cutIt(arr){
  const len = arr.map(ele => ele.length);
  const minLen = Math.min(...len);
  
  return arr.reduce((a,b) => {
    a.push(b.slice(0,minLen));
    return a;
  },[]);
}



// best


function cutIt(arr){
  const minLength = Math.min(...arr.map(x => x.length));
  return arr.map(x => x.slice(0, minLength));
}






