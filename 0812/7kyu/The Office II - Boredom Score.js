// test


describe("Example tests",() =>{
Test.assertEquals(boredom({tim: 'change', jim: 'accounts',
  randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
  laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
  mr: 'finance' }), 'kill me now');
Test.assertEquals(boredom({ tim: 'IS', jim: 'finance',
  randy: 'pissing about', sandy: 'cleaning', andy: 'cleaning',
  katie: 'cleaning', laura: 'pissing about', saajid: 'regulation',
  alex: 'regulation', john: 'accounts', mr: 'canteen' }), 'i can handle this');
Test.assertEquals(boredom({ tim: 'accounts', jim: 'accounts',
  randy: 'pissing about', sandy: 'finance', andy: 'change',
  katie: 'IS', laura: 'IS', saajid: 'canteen', alex: 'pissing about',
  john: 'retail', mr: 'pissing about' }), 'party time!!');
})



// mine


// objectではmap()やreduce()が使えないので
// Object.values()やobject.keys()などで配列にする

// 今回は値が欲しいので、Object.values()で値だけの配列を作成
// 最終的な出力は合計値に対するメッセージなので、reduceで合計値を求める
// 動作に対する数値が無いときは0を加算するようにしている
// pissing aboutで空白が有るので、replace()で空白を削除しているがkey名を文字列にすれば問題なかった

function boredom(staff){
  const score = Object.values(staff).reduce((a, b) => {
    return a + (obj[b.replace(" ","")] || 0);
  },0);
  
  return score <= 80 ?  'kill me now' : score > 80 && score < 100 ? 'i can handle this' :  'party time!!';
}

const obj = {
  accounts: 1,
  finance: 2,
  canteen: 10,
  regulation: 3,
  trading: 6,
  change: 6,
  IS: 8,
  retail: 5,
  cleaning: 4,
  pissingabout: 25
};


// mine2

function boredom(staff){
  const score = Object.values(staff).reduce((a, b) => {
    return a + (obj[b] || 0);
  },0);
  
  return score <= 80 ?  'kill me now' : score > 80 && score < 100 ? 'i can handle this' :  'party time!!';
}

// const obj = {
//   accounts: 1,
//   finance: 2,
//   canteen: 10,
//   regulation: 3,
//   trading: 6,
//   change: 6,
//   IS: 8,
//   retail: 5,
//   cleaning: 4,
//   "pissing about": 25
// };


// best
// key名を引き出しても同じようにできる．

function boredom(staff){
   var map = {
     accounts:1,
     finance:2,
     canteen:10,
     regulation:3,
     trading: 6,
     change:6,
     IS:8,
     retail:5,
     cleaning:4,
     'pissing about':25
   };
   
   var score = Object.keys(staff).reduce(
     function(a,b){       
       return a+map[staff[b]]
    },0); 
   
   return score <= 80 ? 'kill me now': score < 100 && score > 80 ? 'i can handle this' : 'party time!!';
}


