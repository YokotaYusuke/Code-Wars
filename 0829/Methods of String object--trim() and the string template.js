// test



describe("Tests", () => {
  it("test", () => {
    Test.assertSimilar(fiveLine("  a") , "a\naa\naaa\naaaa\naaaaa");
    Test.assertSimilar(fiveLine("\txy \n") , "xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy");
    Test.assertSimilar(fiveLine("           Ok               ") , "Ok\nOkOk\nOkOkOk\nOkOkOkOk\nOkOkOkOkOk");

  });
});


// mine

function fiveLine(s){
  let result = s.trim();
  const str = s.trim();
  
  for(let i=1; i < 5; i++) {
    result += "\n" + str.repeat(i+1);
  }
  return result;
}


// best

function fiveLine(s){
  s = s.trim();
  return `${s}\n${s.repeat(2)}\n${s.repeat(3)}\n${s.repeat(4)}\n${s.repeat(5)}`;
}



// other

function fiveLine(s){
  s = s.trim();
  return `${s}\n${s}${s}\n${s}${s}${s}\n${s}${s}${s}${s}\n${s}${s}${s}${s}${s}`;
}


// other

function fiveLine(s) {
  return [1,2,3,4,5].map(n => s.trim().repeat(n)).join('\n');
}
