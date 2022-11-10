const countLetters = function (string) {
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

module.exports = countLetters;