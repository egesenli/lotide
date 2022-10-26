const assertArraysEqual = function(actual, expected) {
  if (actual.toString() === expected.toString()) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const eqArrays = function(actual, expected) {
  if (actual.toString() === expected.toString()) {
    return true;
  } else {
    return false;
  }
};

// Array.prototype.middle = function () {
//   const
//       half = Math.floor(this.length/2)
//       offset = 1 - this.length % 2;
  
//   return this.slice(half - offset, half + 1);
// };

const middle = function(array) {
  let half = Math.floor(array.length/2);
  let offset = 1 - array.length % 2;
  return array.slice(half - offset, half + 1);
};

console.log(middle([1, 2, 3, 4, 5]));    // [3]
console.log(middle([1, 2, 3, 4, 5, 6])); // [3, 4]
console.log(middle([1,2,3,4]));       // [2, 3]