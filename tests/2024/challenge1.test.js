const { getNumber } = require("../../src/2024/challenge1");

describe("Challenge 01 - Terminal Lock", () => {
  test('should solve combination "000" with movements "URURD"', () => {
    expect(getNumber("000", "URURD")).toBe("119");
  });

  test('should solve combination "1111" with movements "UUURUUU"', () => {
    expect(getNumber("1111", "UUURUUU")).toBe("4411");
  });

  test('should solve combination "9999" with movements "LULULULD"', () => {
    expect(getNumber("9999", "LULULULD")).toBe("8000");
  });
});
