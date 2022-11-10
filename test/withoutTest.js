const assert = require('chai').assert;
const without = require('../without');


describe("#without", () => {
  it("returns ['1', '2'] for ['1', '2', '3'] if consider itemsToRemove array [1, 2, '3'].", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });
  it("returns 'e' for 'abcde' if consider itemsToRemove array 'abcd'.", () => {
    assert.deepEqual((without("abcde", "abcd")), ["e"]);
  });
  it("returns [] for 'abc' if consider itemsToRemove array 'abc'.", () => {
    assert.deepEqual((without("abc", "abc")), []);
  });
  it("returns [2, 3] for [1, 2, 3] if consider itemsToRemove array [1].", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
});