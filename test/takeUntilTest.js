//import assert library from chai package.
const assert = require('chai').assert;
//import takeUntil function.
const takeUntil = require('../takeUntil');

describe("takeUntil function", () => {
  it("returns the array up until the function callback is true", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const results1 = takeUntil(data1, x => x < 0);
    assert.deepEqual(results1, [1, 2, 5, 7, 2]);
  });
  
  it("returns the array up until the function callback is true for string too", () => {
    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const results2 = takeUntil(data2, x => x === ',');
     assert.deepEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ]);
  })
});