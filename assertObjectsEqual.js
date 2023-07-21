const eqObjects = function (object1, object2) {

  if (Object.keys(object1).length === Object.keys(object2).length) {

    for (var key1 in object1) {
      for (var key2 in object2) {
        if (key1 === key2) {
          eq = true;
        }
      }
    }
  }

  else {
    eq = false;
  }
  return eq;
};

const assertObjectsEqual = function(actual, expected) {
  let isEqual = false;
  const keys1 = Object.keys(actual);
  const keys2 = Object.keys(expected);
  if (keys1.length !== keys2.length) {
    isEqual = false;
  } else {
    for (let key of keys1) {
      if (actual[key] === expected[key]) {
        isEqual =  true;
      } else {
          isEqual = false;
          break;
      }
    }
  }
  if (isEqual) {
    console.log('✅✅✅ Assertion Passed: --> "' + expected + '" === "' + actual + '"');
  } else {
    console.log('🛑🛑🛑 Assertion Failed: --> "' + expected + '" !== "' + actual + '"');
  }
};

assertObjectsEqual({ a: '1', b: 2 },{ b: 2, a: '1' });
assertObjectsEqual({ a: '1', b: 2 },{ b: 2, a: '1', c: 3 });
assertObjectsEqual("lighthouse", "labs");
assertObjectsEqual("lighthouse", "lighthouse");