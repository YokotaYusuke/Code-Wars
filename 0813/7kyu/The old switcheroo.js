// test



describe('Initial test',() => {
  Test.assertEquals(vowel2index('this is my string'),'th3s 6s my str15ng');
  Test.assertEquals(vowel2index('Codewars is the best site in the world'),'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld');
  Test.assertEquals(vowel2index('Tomorrow is going to be raining'), 'T2m4rr7w 10s g1415ng t20 b23 r2627n29ng');
  Test.assertEquals(vowel2index(''), '');
});







// mine


function vowel2index(str) {
  return [...str].reduce((a,b,i) => {
    return /[aeiou]/ig.test(b) ? a + (i+1) : a + b;
  },"");
}


// mine2

function vowel2index(str) {
  return str.replace(/[aeiou]/ig, ((element, i) => i + 1));
}


// best

function vowel2index(str) {
  return str.replace(/[aeiou]/ig, (m, i) => i + 1);
}


// other

const vowel2index = str => str.replace(/[aeiou]/gi,(_,i) => i+1);











