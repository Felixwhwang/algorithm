// Evaluating Factorials
// Create a function that takes an array of factorial expressions and returns their sum.

//   Examples
// evalFactorial(["2!", "3!"]) ➞ 8

// evalFactorial(["5!", "4!", "2!"]) ➞ 146

// evalFactorial(["0!", "1!"]) ➞ 2
// Notes
// 0! and 1! both equal 1.

const evalFactorial = arr => {
  return arr.reduce((sum, cur) => {
    sum += factorial(parseInt(cur));
    return sum;
  }, 0);
}

const factorial = num => {
  let result = 1;
  if(num === 0) return 1;
  for(let index = 1; index <= num; index++) {
    result *= index;
  }
  return result;
}

console.log(factorial(4));
