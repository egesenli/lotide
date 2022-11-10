const assert = require('chai').assert;
const assertObjectsEqual = require('../assertObjectsEqual');

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

describe("#assertObjectsEqual", () => {
  it("returns true for cd === dc", () => {
    assert.deepEqual(assertObjectsEqual(cd, dc), true);
  });
});