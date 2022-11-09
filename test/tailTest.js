const tail = require('../tail');
const assertArraysEqual = require('../assertArraysEqual');

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertArraysEqual(result, ["Lighthouse", "Labs"]);

console.log("----");

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertArraysEqual(words.length, 3); // original array should still have 3 elements!

console.log("----");

// Test Case: Check the single element array
const words2 = ["Yo Yo"];
tail(words2); // no need to capture the return value since we are not checking it
assertArraysEqual(words2.length, 3); // original array should still have 3 elements!

console.log("----");

// Test Case: Check the single element array
const words3 = [];
tail(words3); // no need to capture the return value since we are not checking it
assertArraysEqual(words3.length, 3); // original array should still have 3 elements!