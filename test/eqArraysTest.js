//import assert library from chai package.
const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("eqArrays function", () => {
  it("returns true when its identical arrays", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns true when its empty arrays", () => {
    assert.deepEqual(eqArrays([], []), true);
  });
  it("returns false when the arrays with different values", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });
  it("returns false when comparing arrays with different types", () => {
    assert.deepEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), false);
  });
});

module.exports = eqArrays;



