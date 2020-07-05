// Concatenate Variable Number of Input Arrays
// Create a function that concatenates n input arrays, where n is variable.

//   Examples
// concat([1, 2, 3], [4, 5], [6, 7]) ➞[1, 2, 3, 4, 5, 6, 7]

// concat([1], [2], [3], [4], [5], [6], [7]) ➞[1, 2, 3, 4, 5, 6, 7]

// concat([1, 2], [3, 4]) ➞[1, 2, 3, 4]

// concat([4, 4, 4, 4, 4]) ➞[4, 4, 4, 4, 4]
// Notes
// Arrays should be concatenated in order of the arguments.

const concat = (...args) => {
  let result = [];
  for(let index = 0; index < args.length; index++) {
    for(let j = 0; j < args[index].length; j++) {
      result.push(args[index][j]);
    }
  }
  return result;
}

console.log(concat([1, 2, 3], [4, 5], [6, 7], [8, 10]));
