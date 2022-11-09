const assert = require('chai').assert;
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
const words2 = ["Yo Yo"];
const words3 = [];


describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("returns 3 for words.length", () => {
    assert.strictEqual((words.length), 3);
  });
  it("returns 0 for tail(words2).length", () => {
    assert.strictEqual(tail(words2).length, 0);
  });
  it("returns 0 for tail(words3).length", () => {
    assert.strictEqual(tail(words3).length, 0);
  });
});