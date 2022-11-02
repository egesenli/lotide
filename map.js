//Implemented eqArrays.
const eqArrays = function(array1, array2) {
  let result=true;
  if(!array1 || !array2) return false;
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i ++) {
    if (Array.isArray(array1[i]) || Array.isArray(array2[i])) {
      result = eqArrays(array1[i], array2[i]);
    } else if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return result;
};
//Implemented assertArraysEqual for testing.
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual,expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} === ${expected}`);
  }  
};

const words = ["ground", "control", "to", "major", "tom"];
//Map function created.
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const results1 = map(words, word => word[0]);

//Tests.
assertArraysEqual(results1,['g', 'c', 't', 'm', 't'])