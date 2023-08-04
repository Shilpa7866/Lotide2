const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function (array) {
  if (array.length <= 2) {
    return []
  }
  if (array.length % 2 === 0) {
    const index2 = array.length / 2
    const index1 = index2 - 1
    const value1 = array[index1]
    const value2 = array[index2]
    return [value1, value2]
  }
  const index = (array.length - 1) / 2
  const value = array[index]
  return [value]
}

module.exports = middle;


module.exports = middle;