const isPrime = (number) => {
  if (number <= 1) return false;
  if (number === 2) return true;
  if (number % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const getValidNumbers = (input) => {
  const array = input.split(",").map((item) => parseInt(item));
  const validNumbers = array
    .filter((item) => isPrime(item))
    .filter((item) => {
      const sumOfDigits = item
        .toString()
        .split("")
        .reduce((acc, digit) => acc + parseInt(digit), 0);
      return isPrime(sumOfDigits);
    });
  return validNumbers.join(",");
};

module.exports = { getValidNumbers };
