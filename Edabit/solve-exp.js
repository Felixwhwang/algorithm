// Create a function that takes a number a and finds the missing exponent x so that a when raised to the power of x is equal to b.

//   Examples
// solveForExp(4, 1024) ➞ 5

// solveForExp(2, 1024) ➞ 10

// solveForExp(9, 3486784401) ➞ 10
// Notes
// a is raised to the power of what in order to equal b ?

// 3 * 3 * 3 * 3 = 81; 4

// 81 / 3 = 27 / 3 = 9 / 3 = 3 / 3 = 1

const solveForExp = (num, result) => {
  let exponent = 0;
  while ( result > 1) {
    result /= num;
    exponent++;
  }
  return exponent;
}

console.log( 9 ** 3 );
