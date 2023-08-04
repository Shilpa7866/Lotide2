const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
const tail = require('../tail');  // imports tail function

describe('#tail', () => {
  it("returns a new array containing all elements of the array except for the first one", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("should not modify the original array when called an array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    //tail(words);
    assert.deepEqual(tail(words), (["Lighthouse", "Labs"]));
  });
});





module.exports = tail;