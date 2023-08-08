//import assert library from chai package.
const assert = require('chai').assert;

//import map function.
const map = require('../map');

describe("map function", () => {
  it("returns a new array with the first letter of each word in the array", () => {
    const words = ["Light", "House", "Labs", "is", "awesome"];
    const results1 = map(words, function(word) {
      return word[0];
    });
    assert.deepEqual(results1, [ 'L', 'H', 'L', 'i', 'a' ]);
  });
  
  it("returns a new array with the first letter of each word in the array", () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const results1 = map(words, function(word) {
      return word[0];
    });
    assert.deepEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
  });
});