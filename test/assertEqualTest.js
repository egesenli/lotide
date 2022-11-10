const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {
  it("returns false for 'Lighthouse Labs' === 'Bootcamp'", () => {
    assert.deepEqual(assertEqual("Lighthouse Labs", "Bootcamp"), false);
  });
  it("returns true for 1 === 1", () => {
    assert.deepEqual(assertEqual(1, 1), true);
  });
  it("returns false for 1 === 3", () => {
    assert.deepEqual(assertEqual(1, 3), false);
  });
  it("returns false for 'Ege' === 'Ege'", () => {
    assert.deepEqual(assertEqual("Ege", "Ege"), true);
  });
});