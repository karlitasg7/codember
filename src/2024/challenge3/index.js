const getTotalSteps = (instructions) => {
  const array = instructions.split(" ");
  let total = 0;
  let position = 0;

  if (array[0] < 0) {
    return 1;
  }

  while ((position >= 0) & (position < array.length)) {
    const step = parseInt(array[position]);

    if (step > 0) {
      array[position] = step + 1;
      position += step;
    }

    if (step < 0) {
      array[position] = step + 1;
      position += step;
    }

    if (step == 0) {
      array[position] = 1;
    }

    total += 1;

    if (position > array.length) {
      break;
    }
  }

  return total;
};

module.exports = { getTotalSteps };
