const { getNodes } = require("../../src/2024/challenge4");

describe("Challenge 04", () => {
  test("should return [4, 5] for [[1, 2], [2, 3], [4, 5]]", () => {
    expect(getNodes("[[1, 2], [2, 3], [4, 5]]")).toBe("4,5");
  });

  test("should return [] for [[1, 2], [2, 3], [3, 4]]", () => {
    expect(getNodes("[[1, 2], [2, 3], [3, 4]]")).toBe("");
  });

  test("should return [4, 6, 7, 9] for [[4, 6], [7, 9], [10, 12], [12, 16]]", () => {
    expect(getNodes("[[4, 6], [7, 9], [10, 12], [12, 16]]")).toBe("4,6,7,9");
  });
});
