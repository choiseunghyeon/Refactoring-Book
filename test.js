import assert from "assert";
import Province from "./sample.js";
import sampleProvinceData from "./provinceData.js";

describe("province", function () {
  it("shortfall", function () {
    const asia = new Province(sampleProvinceData());
    assert.equal(asia.shortfall, 5);
  });
});
