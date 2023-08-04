const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual'); 



const middle = function(numArray) {
  var middleVal = Math.floor(numArray.length / 2);
  if(numArray.length % 2 === 0) {
    return (numArray[middleVal - 1]  + "," + numArray[middleVal]);
  } else {
    return (numArray[middleVal]);
  }
};



module.exports = middle;