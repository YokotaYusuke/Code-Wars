// test


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Sample Tests", () => {
  it("Should pass sample tests", () => {
    assert.deepEqual(colourAssociation([["white", "goodness"], ["blue", "tranquility"]]), [{white:"goodness"},{blue:"tranquility"}]);
    assert.deepEqual(colourAssociation([["red", "energy"],["yellow", "creativity"],["brown" , "friendly"],["green", "growth"]]), [{red: "energy"},{yellow: "creativity"}, {brown: "friendly"},{green: "growth"}]);
  });
});



// mine
// forEach()

function colourAssociation(array){
  const result = [];
  
 array.forEach((element, i) => {
    let obj = {};
    obj[element[0]] = element[1];
    result.push(obj);
  });
  return result;
}

// mine2
// オブジェクトで返したい場合は()で囲う必要が有る。=> map()の{}と被るから。
// キーの名前が変数なので[]で囲う必要が有る。

function colourAssociation(array){
  return array.map(element => ({[element[0]]: element[1]}));
}

// best

const colourAssociation = array => array.map(([colour, association]) => ({[colour]:association}))


// other

function colourAssociation(array){
  return array.map(x => ({ [x[0]]: x[1]}));
}




