
const assertEqual = require('./assertEqual');

const tail = function(arr1) {
  let arr2 = [];
  for(let i = 1; i < arr1.length; i++)
    arr2.push(arr1[i]);
  return arr2;
}



module.exports = tail;