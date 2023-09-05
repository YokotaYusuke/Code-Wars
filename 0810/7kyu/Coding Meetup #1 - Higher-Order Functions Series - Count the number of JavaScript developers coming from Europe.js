// test


const assert = require('chai').assert;
describe("Sample tests", () => {
  const list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
  ];

  it("should find JavaScript developers from Europe", () => {
    assert.strictEqual(countDevelopers(list1), 1, "Noah is the only JavaScript developer from Europe");
  });
  
  const list2 = [
    { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 19, language: 'HTML' },
    { firstName: 'Lukas', lastName: 'R.', country: 'Austria', continent: 'Europe', age: 89, language: 'HTML' }
  ];
  
  it("should not find HTML developers from Europe", () => {
    assert.strictEqual(countDevelopers(list2), 0, "Lukas is not a JS devolper");
  });
});




// mine


// continentの値がEuropeかつlanguageがjavascriptのオブジェクトの数をカウント

function countDevelopers(list) {
  console.log(list);
  let countNum = 0;
  list.forEach((element, i) => {
    element["continent"] === "Europe" && element["language"] === "JavaScript"? countNum++ : "";
  });
  return countNum;
}

// best
// filterで絞り込み残った配列の要素数を返す

function countDevelopers(list) {
  return list.filter(x=>x.continent=='Europe'&&x.language=='JavaScript').length
}