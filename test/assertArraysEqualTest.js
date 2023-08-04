const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');


assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertArraysEqual(eqArrays([1, 2, 3, 4], [3, 2, 1]), false);

module.exports = assertArraysEqual;