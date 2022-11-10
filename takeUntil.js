const takeUntil = function (array, callback) {
  newArray = [];
  let untilIndex;
  for (let index = 0; index < array.length; index++) {
    const resultCallback = callback(array[index]);
    if (resultCallback) {
      untilIndex = index - 1;
      break;
    }
  }
  for (let i = 0; i <= untilIndex; i++) {
    newArray.push(array[i])
  }
  return newArray;
}

module.exports = takeUntil;