const assert = require('chai').assert;
const countLetters = require('../countLetters');

const result = countLetters("lighthouse in the house");


describe("#countLetters", () => {
  it("return 1 for 'l' in 'lighthouse in the house'.", () => {
    assert.deepEqual(result["l"], 1);
  });
  it("return 4 for 'h' in 'lighthouse in the house'.", () => {
    assert.deepEqual(result["h"], 4);
  });
  it("return undefined for 'x' in 'lighthouse in the house'.", () => {
    assert.deepEqual(result["x"], undefined);
  });
});