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

function without (array1, array2) {

  var source = []
  var diff = []

  for (var i = 0; i < array1.length; i++) {
      source.push(array1[i])
  }

  for (var i = 0; i < array2.length; i++) {
    diff.push(array2[i])
}

  return difference = source.filter(x => !diff.includes(x));

}

//Without function tests for every case
console.log(without(["1", "2", "3"], [1, 2, "3"]));
console.log(without("abcde", "abcd"));
console.log(without("zxc", "zxc"));
console.log(without([1, 2, 3], [1]));// => [2, 3]

//assertArraysEqual test
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);