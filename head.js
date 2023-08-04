const assertEqual = require('./assertEqual');

const head = function(arr1) {
  return arr1[0];
};


console.log(assertEqual(head([5,6,7]), 5));

console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));