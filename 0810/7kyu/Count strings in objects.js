// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Example", () => {
  it("should test", () => {
    assert.strictEqual(strCount({
      first:  "1",
      second: "2",
      third:  false,
      fourth: ["anytime",2,3,4],
      fifth:  null,
      sixth:  undefined,
      seventh:{}
    }),3,"Did not count the correct number of strings. Check counting inside nested objects.");
  });
});



// mine
// 解けていない！！！！
// オブジェクトの要素のところで失敗！

function strCount(obj){
  let countNum = 0;
  let newObj;
  Array.isArray(obj) ? newObj = obj.flat(Infinity) : newObj = obj;
  
  for(const key in newObj) {
    Array.isArray(newObj[key]) === true && typeof newObj[key] === "object" ? newObj[key].flat(Infinity).reduce((a,b) => typeof b === "string" ? countNum += 1 : "",countNum) : 
    Array.isArray(newObj[key]) === false && typeof newObj[key] === "object" && newObj[key] !== null ? Object.keys(newObj[key]).forEach(keys => typeof keys === "string" ? countNum += 1 : "") :
    typeof newObj[key] === "string" ? countNum += 1 : 
    "";
  }
  return countNum;
}
