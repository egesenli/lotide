const assertArraysEqual = function(actual, expected) {
  if (actual.toString() === expected.toString()) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

assertArraysEqual([1, 2, 3], [3, 2, 1]);