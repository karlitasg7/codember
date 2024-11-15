const { isValid } = require("../../src/2024/challenge2");

describe("Challenge 02", () => {
  test("should return true for 1234", () => {
    expect(isValid("1234")).toBe(true);
  });

  test("should return true for abc", () => {
    expect(isValid("abc")).toBe(true);
  });

  test("should return false for a123", () => {
    expect(isValid("a123")).toBe(false);
  });

  test("should return true for 123abc", () => {
    expect(isValid("123abc")).toBe(true);
  });

  test("should return false for dbce", () => {
    expect(isValid("dbce")).toBe(false);
  });

  test("should return true for aab", () => {
    expect(isValid("aab")).toBe(true);
  });
});
