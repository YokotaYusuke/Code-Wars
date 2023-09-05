// test




const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic Tests", function() {
  it("Tests", () => {
    assert.strictEqual(getMean([1,3,2,4],2,3),2.5);
    assert.strictEqual(getMean([1,3,2],2,2),2.25);
    assert.strictEqual(getMean([1,3,2,4],1,2),-1);
    assert.strictEqual(getMean([1,3,2,4],2,8),-1);
  })
});



// mine

function outed(meet, boss){
  let score = 0;
  let peopleNum = 0;
  for(const key in meet) {
    key === boss ? score += meet[key] * 2 : score += meet[key];
    peopleNum ++;
  }
  return score / peopleNum <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';
}



// best

function outed(meet, boss) {
  let names = Object.keys(meet)
  let score = names.reduce((s,v) => s + meet[v], 0) + meet[boss]
  return score / names.length > 5 ? 'Nice Work Champ!' : 'Get Out Now!'
}


// other

function outed(c, b) {
  return Object.keys(c).reduce((s, e) => s + c[e] * (e === b ? 2 : 1), 0) / Object.keys(c).length > 5 ? "Nice Work Champ!" : "Get Out Now!";
}


