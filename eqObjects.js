const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(" ✅✅✅ Assertion Passed: [+actual+] === [+expected]+");
  }
  else if (actual !== expected) {
    console.log(" 🛑🛑🛑 Assertion Failed: [+actual+] !== [+expected+]");
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




const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };

const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };

console.log(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject)); // => true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
console.log(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject)); // => false

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
console.log(eqObjects(shirtObject, anotherShirtObject)); // => true


const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
console.log(eqObjects(shirtObject, longSleeveShirtObject)); // => false
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
console.log(eqArrays(shirtObject, longSleeveShirtObject));
console.log(eqArrays(multiColorShirtObject, longSleeveMultiColorShirtObject));