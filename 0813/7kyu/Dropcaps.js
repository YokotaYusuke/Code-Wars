// test



const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic Tests", () => {
  it("Tests", () => {
    assert.strictEqual(dropCap('Apple Banana'),"Apple Banana");
    assert.strictEqual(dropCap('Apple'),"Apple");
    assert.strictEqual(dropCap(''),"");
    assert.strictEqual(dropCap('of'),"of");
    assert.strictEqual(dropCap('Revelation of the contents outraged American public opinion, and helped generate'),"Revelation of The Contents Outraged American Public Opinion, And Helped Generate");
    assert.strictEqual(dropCap('more  than    one space between words'),"More  Than    One Space Between Words")
    assert.strictEqual(dropCap('  leading spaces'),"  Leading Spaces")
    assert.strictEqual(dropCap('trailing spaces   '),"Trailing Spaces   ")
    assert.strictEqual(dropCap('ALL CAPS CRAZINESS'),"All Caps Craziness")
    assert.strictEqual(dropCap('rAnDoM CaPs CrAzInEsS'),"Random Caps Craziness")
  })
})




// mine


















