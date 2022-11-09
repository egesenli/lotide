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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// assertArraysEqual([1, 2, 3], [3, 2, 1]);

module.exports = assertArraysEqual;