const eqArrays = require('./eqArrays');
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) { //Compared lengths of the keys.
    return false;
  }
  for (let key of keys1) { //Looped through the keys returned by Object.keys for one of the objects.
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { //Used Array.isArray against both values if array comparison need to be made.
      return eqArrays(object1[key], object2[key])
    } else if (object1[key] !== object2[key]) { //Compared both objects' values for that key.
      return false;
    }
  }
  return true; //Our control flow will therefore only get to the end of the loop if all the keys matched. We can and should thus return true at the end (after the loop)
};

module.exports = eqObjects;





