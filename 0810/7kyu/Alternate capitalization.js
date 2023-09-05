// test


describe("Basic tests", function(){
  Test.assertDeepEquals(capitalize("abcdef"),['AbCdEf', 'aBcDeF']);
  Test.assertDeepEquals(capitalize("codewars"),['CoDeWaRs', 'cOdEwArS']);
  Test.assertDeepEquals(capitalize("abracadabra"),['AbRaCaDaBrA', 'aBrAcAdAbRa']);
  Test.assertDeepEquals(capitalize("codewarriors"),['CoDeWaRrIoRs', 'cOdEwArRiOrS']);
  });




// mine

function capitalize(s){
  const leftArr = [...s].reduce((a,b,i) => i %2 === 0 ? a + b.toUpperCase() : a + b, "");
  const rightArr = [...s].reduce((a,b,i) => i %2 === 1 ? a + b.toUpperCase() : a + b, "");
  return [leftArr, rightArr];
};


// best

function capitalize(s){
  const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
  const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
  return [even, odd];
};


// other

function capitalize(s){
  return [0,1].map(r=>[...s].map((c,i)=>i%2===r?c.toUpperCase():c).join(''));
};
