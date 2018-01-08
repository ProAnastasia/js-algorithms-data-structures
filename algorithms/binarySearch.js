/**
 * Binary search for the sorted array.
 * Returns position of the required element.
 */

const binary_search = (list, item) => {
  let lowest = 0;
  let highest = list.length - 1;
  let middle, guess;

  while (lowest <= highest) {
    middle = Math.floor((lowest + highest) / 2);
    guess = list[middle];

    if (guess == item) {
      return middle;
    } else if (guess < item) {
      lowest = middle + 1;
    } else {
      highest = middle - 1;
    }
  }

  return null;
};