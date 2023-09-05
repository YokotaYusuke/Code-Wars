// test


const Test = require('@codewars/test-compat');

describe("GetMiddle", function() {
  it("Tests", function() {
    Test.assertEquals(getMiddle("test"),"es");
    Test.assertEquals(getMiddle("testing"),"t");
    Test.assertEquals(getMiddle("middle"),"dd");
    Test.assertEquals(getMiddle("A"),"A");
  });
});








// slice(start,end)は取り出したい始まりのインデックスと終わりのインデックスを指定
// 奇数の場合、文字数を2で割ると小数点が出るが動きはどうなる？


// "testing"だったらtingとなる 7 / 2 は3.5で小数点は無視されて、3と同じ動きになる
// console.log(s.slice(3.5,4.5)) === console.log(s.slice(3,4))

// mine

function getMiddle(s) {
  let type = "";
  s.length %2 === 0 ? type = "even" : type = "odd";
  return type === "odd" ? s.slice(Math.floor(s.length / 2),Math.floor(s.length / 2)+1) : s.slice(Math.floor(s.length / 2)-1,Math.floor(s.length / 2)+1);
}


// mine2

// なぜs.length /2 ではなく(s.length-1)/2なのか

// 3 と 3.5は同じ
// 2.5 と 3は違う
// 割る前に-1する事で

function getMiddle(s) {
  return s.slice((s.length-1)/2,s.length/2+1);
}


// best

function getMiddle(s) {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}



// other

function getMiddle(s) {
  var middle = s.length / 2;
  return (s.length % 2) ? s.charAt(Math.floor(middle)) : s.slice(middle - 1, middle + 1);
}

// other2


function getMiddle(s) {
  return s.slice((s.length-1)/2, s.length/2+1);
}


