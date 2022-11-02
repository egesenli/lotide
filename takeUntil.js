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
//Created takeUntil function.
const takeUntil = function(array, callback) {
  newArray = [];
  let untilIndex;
  for (let index = 0; index < array.length; index++) {
    const resultCallback = callback(array[index]);
    if (resultCallback) {
      untilIndex = index - 1;
    }
  }
  for (let i = 0; i <= untilIndex; i++) {
    newArray.push(array[i])
  }
  return newArray;
}
//Tests.
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1,[1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results2,["I've", "been", "to", "Hollywood"]);
