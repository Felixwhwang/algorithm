// Odd Up, Even Down — N Times
// Create a function that performs an even - odd transform to an array, n times.Each even - odd transformation:

// Adds two(+2) to each odd integer.
// Subtracts two(-2) to each even integer.
//   Examples
// evenOddTransform([3, 4, 9], 3) ➞[9, -2, 15]
// // Since [3, 4, 9] => [5, 2, 11] => [7, 0, 13] => [9, -2, 15]

// evenOddTransform([0, 0, 0], 10) ➞[-20, -20, -20]

// evenOddTransform([1, 2, 3], 1) ➞[3, 0, 5]


const evenOddTransform = (arr, n) => {
  return arr.map( cur => {
    return cur % 2 === 0 ? (-2 * n + cur) : (2 * n + cur);
  });
}

console.log(evenOddTransform([1, 2, 3], 1));
