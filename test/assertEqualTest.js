const assertEqual = require('../assertEqual');

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("apple", "banana");  //failed
assertEqual(10, 10);   //passed
assertEqual("fruit", "fruit");  //passed! identical strings.

module.exports = assertEqual;