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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) { //Compared lengths of the keys.
      return false;
    }
    for (let key of keys1) { //Looped through the keys returned by Object.keys for one of the objects.
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { //Used Array.isArray against both values if array comparison need to be made.
        return eqArrays(object1[key], object2[key])
      } else if (object1[key] !== object2[key]) { //Compared both objects' values for that key.
        return false;
      }
    }
    return true; //Our control flow will therefore only get to the end of the loop if all the keys matched. We can and should thus return true at the end (after the loop)
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

//eqArrays TESTS
console.log("--eqArrays TESTS--")
console.log(eqArrays([1, [2, 3],4], [1, [2, 3],4])); // => true
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

//STEP 2 TESTS
console.log("--STEP2 TESTS--")
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba),true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc),false); // => false

//STEP3 TESTS
console.log("--STEP3 TESTS--")
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc),true) // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(dc, cd2),false) // => false



