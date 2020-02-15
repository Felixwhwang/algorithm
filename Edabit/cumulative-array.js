// Cumulative Array Sum
// Create a function that takes an array of numbers and returns an array where each number is the sum of itself + all previous numbers in the array.

//   Examples
// cumulativeSum([1, 2, 3]) ➞[1, 3, 6]

// cumulativeSum([1, -2, 3]) ➞[1, -1, 2]

// cumulativeSum([3, 3, -2, 408, 3, 3]) ➞[3, 6, 4, 412, 415, 418]
// Notes
// Return an empty array if the input is an empty array.

const cumulativeSum = arr => {
  return arr.map( (cur, index) => {
    let sum = 0;
    for(let i = 0; i < index + 1; i++) {
      sum += arr[i];
    }
    return sum;
  });
}

console.log(cumulativeSum([1, -2, 3]));
