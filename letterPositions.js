const assertArraysEqual = function(actual, expected) {
  if (actual.toString() === expected.toString()) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const letterPositions = function(string) {
  const results = {};
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      if (results[string[i]]) {
        results[string[i]].push(i)
      } else {
        results[string[i]] = [i];
      }
    }
  }
  return results;
};


console.log(letterPositions("hello"));
console.log(letterPositions("hello").l);
assertArraysEqual(letterPositions("hello").l, [2,3]);