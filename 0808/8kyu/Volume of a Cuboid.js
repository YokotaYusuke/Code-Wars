// test

const { assert } = require('chai')

describe("Tests", () => {
  it("Example tests", () => {
    assert.strictEqual(Kata.getVolumeOfCuboid(1,2,2),  4);
    assert.strictEqual(Kata.getVolumeOfCuboid(6,2,5), 60);
  });
});


class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}




