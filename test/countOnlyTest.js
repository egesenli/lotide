const assert = require('chai').assert;
const countOnly = require('../countOnly');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe("#countOnly", () => {
  it("return 1 for 'Jason' since it has got a true value.", () => {
    assert.deepEqual(result1["Jason"], 1);
  });
  it("return undefined for 'Karima' since it's not in the given firstNames list.", () => {
    assert.deepEqual(result1["Karima"], undefined);
  });
  it("return 2 for 'Fang' since it has got a true value.", () => {
    assert.deepEqual(result1["Fang"], 2);
  });
  it("return undefined for 'Agouhanna' since it has got a false value.", () => {
    assert.deepEqual(result1["Agouhanna"], undefined);
  });
});