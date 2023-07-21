const assertEqual = function(actual, expected) {
  if (actual === expected) {
        console.log(" ✅✅✅ Assertion Passed: [+actual+] === [+expected]+");
    }
    else if (actual !== expected) {
        console.log(" 🛑🛑🛑 Assertion Failed: [+actual+] !== [+expected+]");
    }

};
const tail = function(arr1) {
  let arr2 = [];
  for(let i = 1; i < arr1.length; i++)
    arr2.push(arr1[i]);
  return arr2;
}

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);

const words = ["Yo Yo", "Lighthouse", "Labs"];

tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!