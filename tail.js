const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const tail = function(array) {

  const arrayTail = array.slice(1);

  console.log(arrayTail);

  return arrayTail;

};

// Modified assertEqual function for comparing arrays

const assertEqArray = function(actual, expected) {
  if (actual.toString() === expected.toString()) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};


const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqArray(result, ["Lighthouse", "Labs"]);

console.log("----");

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

console.log("----");

// Test Case: Check the single element array
const words2 = ["Yo Yo"];
tail(words2); // no need to capture the return value since we are not checking it
assertEqual(words2.length, 3); // original array should still have 3 elements!

console.log("----");

// Test Case: Check the single element array
const words3 = [];
tail(words3); // no need to capture the return value since we are not checking it
assertEqual(words3.length, 3); // original array should still have 3 elements!