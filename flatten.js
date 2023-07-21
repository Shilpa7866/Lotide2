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

const flatten = (arr) => {
	let flatArr = [];
	for (let i = 0; i < arr.length; i++){
		if (Array.isArray(arr[i])){
			for (var x = 0; x < arr[i].length; x++){
				flatArr.push(arr[i][x]);
			};
		} else {
			flatArr.push(arr[i]);
		}
	};
  return flatArr; 
};

console.log(flatten([1,2,3, [4,5], 6, [7,8], 9]));
console.log(flatten([1,2,3, [4,5], 6, [7,8], 9, [10, 11]]));