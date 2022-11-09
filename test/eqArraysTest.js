const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');


//Array tests
console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

//Nested Array test
console.log(eqArrays([[1,2], 2, 3], [[1,2], 2, 3])) // => true

//assertEqual function test
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);