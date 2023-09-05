// test


const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
const objC = { a: 5, d: 11, e: 8 }
const objD = { c: 3 }

describe('Combine two objects', () => {
  testDeepEqual(combine(objA, objB), { a: 13, b: 20, c: 36, d: 3 })
  testDeepEqual(combine(objA, objC), { a: 15, b: 20, c: 30, d: 11, e: 8 })
})

describe('Combine three objects', () => {
  testDeepEqual(combine(objA, objB, objC), { a: 18, b: 20, c: 36, d: 14, e: 8 })
  testDeepEqual(combine(objA, objC, objD), { a: 15, b: 20, c: 33, d: 11, e: 8 })
})

describe('Handle empty objects', () => {
  testDeepEqual(combine({}, {}, {}), {})
  testDeepEqual(combine(objA, objC, {}), { a: 15, b: 20, c: 30, d: 11, e: 8 })
})



// mine



function combine(...objects) {
  const result = {};
  
  for(const obj of objects) {
  for(const key in obj) {
    result[key] === undefined ? result[key] = obj[key] : result[key] += obj[key];
    }
  }
  return result;
}



// best


const combine = (...params) => params.reduce((a, b) => {
  for (const x in b) {
    a[x] = x in a ? a[x] + b[x] : b[x]
  };
  return a;
 }, {});









