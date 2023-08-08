
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


module.exports = eqObjects;