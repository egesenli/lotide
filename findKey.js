const findKey = function (obj, callback) {
  let keyOfItem = undefined;
  for (var key in obj) {
    if (callback(obj[key])) {
      keyOfItem = key;
      break;
    }
  }
  return keyOfItem;
};

module.exports = findKey;