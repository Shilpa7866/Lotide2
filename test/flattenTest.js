// import assert library from chai package.
const assert = require('chai').assert;

// import findKey function.
const flatten = require('../flatten');

describe("flatten function", () => {
  it("returns all the elements in the nested array sorted and merged", () => {
    assert.deepEqual(flatten([6, 5, [4, 3], 2, [1]]), [6, 5, 4, 3, 2, 1]);
  });
 
  it("returns all the elements in the nested array sorted and merged", () => {
    assert.deepEqual((flatten([1,2,3, [4,5], 6, [7,8], 9])), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  })
});