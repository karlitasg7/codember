const getNumber = (numbers, movements) => {
  let result = numbers.split("").map((n) => parseInt(n));
  let position = 0;

  for (let i = 0; i < movements.length; i++) {
    switch (movements[i]) {
      case "U":
        result[position] = result[position] + 1 > 9 ? 0 : result[position] + 1;
        break;
      case "D":
        result[position] = result[position] - 1 < 0 ? 9 : result[position] - 1;
        break;
      case "L":
        if (position - 1 < 0) {
          position = numbers.length - 1;
        } else {
          position--;
        }
        break;
      case "R":
        if (position + 1 > numbers.length - 1) {
          position = 0;
        } else {
          position++;
        }
        break;
    }
  }

  return result.join("");
};

module.exports = { getNumber };
