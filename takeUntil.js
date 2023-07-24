const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if(!callback(item)) 
      results.push(item);
    else
      break;
  }
  return results;
}

function assertArraysEqual(actual, expected) {
  var index = 0;
  for (var key in actual) {
    if (actual[key] !== expected[key]) {
      index++;
  }}  
  if (index === 0) {
    console.log('Assertion Passed --> Expected "' + expected + '", and send "' + actual + '"');
  } else {
    console.log('Assertion Failed --> Expected "' + expected + '", but send "' + actual + '"');
  }};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');
assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results2,[ "I've", 'been', 'to', 'Hollywood' ]);