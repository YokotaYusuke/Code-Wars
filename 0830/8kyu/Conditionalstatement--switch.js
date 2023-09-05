// test

describe("Tests", () => {
  it("test", () => {
    Test.assertSimilar(howManydays(1),31);
    Test.assertSimilar(howManydays(2),28);
    Test.assertSimilar(howManydays(3),31);
    Test.assertSimilar(howManydays(4),30);
    Test.assertSimilar(howManydays(12),31);
  });
});


// mine

function howManydays(month){
  var days;
  switch (month){
    case 2: 
      return 28; break;
      
    case 4:
    case 6:
    case 9:
    case 11:
      return 30; break;
      
    default: return 31;
  }
  return days;
}

// best

function howManydays(month){
  switch (month){
     case 2: return 28
     case 4:
     case 6:
     case 9:
     case 11: return 30
  }
  return 31
}