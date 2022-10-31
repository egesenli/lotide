const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`❌ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const countLetters = function(string) {
  const countedLetters = {};
  for (let letter of string) {
    if (letter !== ' ') {
      if (countedLetters[letter]) {
        countedLetters[letter] += 1;
      } else { 
        countedLetters[letter] = 1;
      }
    }
  }
  return countedLetters;
};

const result = countLetters("lighthouse in the house");

assertEqual(result["l"], 1);
assertEqual(result["h"], 4);
assertEqual(result["x"], undefined);
