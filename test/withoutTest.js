//import assert library from chai package.
const assert = require('chai').assert;
//import without function.
const without = require('../without');

describe("without function", () => {
  it("returns [2,3] for without([1, 2, 3], [1])", () => {
    without([1, 2, 3], [1]);
    assert.deepEqual([2, 3], [2, 3]);
  });
   it("returns ['1', '2'] for without(['1', '2', '3'], ['3'])", () => {
    without(['1', '2', '3'], ['3']);
    assert.deepEqual(['1', '2'], ['1', '2']);
   });
});