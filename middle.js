const middle = function(array) {
  let half = Math.floor(array.length/2);
  let offset = 1 - array.length % 2;
  return array.slice(half - offset, half + 1);
};

module.exports = middle;

