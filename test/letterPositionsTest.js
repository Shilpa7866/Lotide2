// import assert library from chai package.
const assert = require('chai').assert;

// imports letterPositions function.
const letterPositions = require('../letterPositions');

describe("letterPositions function", () => {
  it("returns the index of each letter inside the string", () => {
    assert.deepEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);
  });
  it("returns the index of each letter inside the string", () => {
    assert.deepEqual(letterPositions("Hello").l, [2,3]);
  });
});


