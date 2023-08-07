const assertObjectsEqual = require('../assertObjectsEqual');

assertObjectsEqual({ a: '1', b: 2 },{ b: 2, a: '1' });  // passed
assertObjectsEqual({ a: '1', b: 2 },{ b: 2, a: '1', c: 3 });  //failed
assertObjectsEqual("lighthouse", "labs");  //failed
assertObjectsEqual("lighthouse", "lighthouse");  //passed

module.exports = assertObjectsEqual;