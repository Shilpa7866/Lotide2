const assertEqual = function(actual, expected) {
  if (actual === expected) {
        console.log(" ✅✅✅ Assertion Passed: [+actual+] === [+expected]+");
    }
    else if (actual !== expected) {
        console.log(" 🛑🛑🛑 Assertion Failed: [+actual+] !== [+expected+]");
    }

};

const head = function(arr1) {
  return arr1[0];
};


console.log(assertEqual(head([5,6,7]), 5));

console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));