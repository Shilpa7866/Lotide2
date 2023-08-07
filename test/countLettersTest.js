// import assert library from chai package.
const assert = require('chai').assert;

// import countLetters function.
const countLetters = require('../countLetters');

describe("countLetters function", () => {
  it("returns the count of each letter inside the string", () => {
    assert.deepEqual(countLetters("LHL"));
  });

  describe("countLetters function", () => {
    it("returns the count of each letter inside the string", () => {
      assert.deepEqual(countLetters("Lighthouse Labs"));
    });
  });
});