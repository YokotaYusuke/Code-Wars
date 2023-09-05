// Training JS #9: loop statement --while and do..while

// test

describe("Tests", () => {
  it("test", () => {
    Test.assertSimilar(padIt("a",1),"*a");
    Test.assertSimilar(padIt("a",2),"*a*");
    Test.assertSimilar(padIt("a",3),"**a*");
    Test.assertSimilar(padIt("a",4),"**a**");
    Test.assertSimilar(padIt("a",5),"***a**");
  });
});


// whileでないのでNG

function padIt(str,n){
  const arr = [..."*".repeat(n)];
  arr.splice(Math.ceil(n/2),0,str);
  return arr.join("");
}


// while

function padIt(str,n){
  let result = "";
  let i = 0;
  
  while(i <= n) {
    i === Math.ceil(n / 2) ? result += str : result += "*";
    i++;
  }
  return result;
}

// best1

function padIt(str, n) {
  while (n > 0) {
    str = n-- % 2 ? '*' + str : str + '*';
  }
  return str;
}

// best2

function padIt(str,n){
  while(n>0){
    if(n%2 === 0) {
      str = str + "*";
    }else{
      str = "*" + str;
    }
    n --;
  }
  return str;
}









