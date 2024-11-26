const { getValidNumbers } = require("../../src/2024/challenge5");

describe("Challenge 05", () => {
  test("should return 11 for 11,12,13,14", () => {
    expect(getValidNumbers("11,12,13,14")).toBe("11");
  });
});
