const assertArraysEqual = function(actual, expected) {
  let arr1 = [];
  let arr2 = [];
  actual = eqArrays(arr1, arr2);
  
  if (actual === eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== eqArrays(arr1, arr2)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const middle = function(numArray) {
  var middleVal = Math.floor(numArray.length / 2);
  if(numArray.length % 2 === 0) {
    return (numArray[middleVal - 1]  + "," + numArray[middleVal]);
  } else {
    return (numArray[middleVal]);
  }
};

console.log(middle([1,3,5])); // expected => []
console.log(middle([1,2,3])); // expected => [2]
console.log(middle([1,2,3,4,5,6])); // expected => [3]