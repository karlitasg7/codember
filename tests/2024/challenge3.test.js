const { getTotalSteps } = require("../../src/2024/challenge3");

describe("Challenge 03", () => {
  test("should return 5 for 1 2 4 1 -2", () => {
    expect(getTotalSteps("1 2 4 1 -2")).toBe(5);
  });

  test("should return 6 for 0 1 2 3 -1", () => {
    expect(getTotalSteps("0 1 2 3 -1")).toBe(6);
  });

  test("should return 2 for 1 -2 5", () => {
    expect(getTotalSteps("1 -2 5")).toBe(2);
  });

  test("should return 1 from -1 0 1 -2 2", () => {
    expect(getTotalSteps("-1 0 1 -2 2")).toBe(1);
  });
});
