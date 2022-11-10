const findKeyByValue = function (obj, val) {
  for (var key in obj) {
    if (obj[key] === val) {
      return key;
    }
  }
};

module.exports = findKeyByValue;