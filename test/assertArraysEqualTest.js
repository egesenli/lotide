const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

describe("#assertArraysEqual", () => {
  it("returns false for [1, 2, 3] === [3, 2, 1]", () => {
    assert.deepEqual(assertArraysEqual([1, 2, 3], [3, 2, 1]), false);
  });
});
