/**
 * Create a function that will accept a parameter called "maxNumber". For the
 * numbers 1 through the maxNumber, print "Fizz" if the number is divisible by 2,
 * "Buzz" if divisible by 3, "Fizz Buzz" if divisible by 2 and 3, or the number
 * if not divisible by 2 or 3.
 */

// const FizzBuzz = maxNumber => {
//   for(let num = 1; num <= maxNumber; num++) {
//     if(num % 2 === 0 && num % 3 === 0) {
//       console.log("Fizz Buzz");
//     } else if(num % 2 === 0) {
//       console.log("Fizz");
//     } else if(num % 3 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log("not divisible by 2 or 3");
//     }
//   }
//   console.log('\n');
// }

// FizzBuzz(9);

/**
 * The Fibonacci Sequence is a series of numbers in which each number ( Fibonacci
 * number ) is the sum of the two preceding numbers. The simplest is the series 1,
 * 1, 2, 3, 5, 8, etc.
 *
 * Create a function that will return an array of all of the fibonacci numbers up
 * to a given sequence number (not including 0 or 1).
 */

// const FibSeq = num => {
//   if(num === 0) return [0];
//   if(num === 1) return [0, 1];
//   let result = [0, 1];
//   while(num >= 2) {
//     result.push(result[result.length - 1] + result[result.length - 2]);
//     num--;
//   }
//   return result;
// }

// console.log(FibSeq(14));


/**
 * Take a standard 12 hour clock. At any given time, the hour and minute hand form
 * an angle representing the time. For example, 3:00 is 90 degrees, 12:30 is 180
 * degrees. Write a function that will compute the smallest angle between the hour
 * and minute hands for a given time.
 * https://www.helpingwithmath.com/printables/worksheets/time/3md1-clock-face-generator01.htm
 *
 * CHALLENGE: Alter the function to accept a parameter to switch between a 12 hour
 * and 24 hour clock.
 */



/**
 * You are passed an array of blocks to compute the total score.
 *
 * Write a function that will output the total score based on the array of blocks.
 *
 * The blocks are processed as follows:
 *  - If a block is an integer, the score for that throw is the value of that integer
 *  - If a block is an "X", the score for that throw is double the value of the last
 *      throw
 *  - CHALLENGE: If a block is a "+", the score for that throw is the sum of the
 *      prior two throws
 *  - CHALLENGE: If a block is a "Z", the previous throw is thrown away (as if it
 *      never happened)
 *
 * eg.
 * computeScore([1, 2, 4, "X"]) => 15
 * computeScore([1, 2, 4, "X", "+"]) => 27
 * computeScore([1, 2, 4, "Z"]) => 3
 */

const computeScore = arr => {
  let sum = 0;
  for(let index = 0; index  < arr.length; index++) {
    if(arr[index] === "X") {
      arr[index] = arr[index - 1] * 2;
      sum += arr[index];
    } else if(arr[index] === "Z") {
      sum -= arr[index - 1];
    } else if(arr[index] === "+") {
      arr[index] = arr[index - 1] + arr[index - 2];
      sum += arr[index];
    } else {
      sum += arr[index];
    }
  }
  return sum;
}
console.log(computeScore([1, 2, 4, "X"]));
console.log(computeScore([1, 2, 4, "X", "+"]));
console.log(computeScore([1, 2, 4, "Z"]));

/**
 * The Price is Right is a game on tv where contestants win by guessing the monetary
 * value (price) of the prizes. There are typically four contestants and each one
 * gets a turn to guess. Each round, the contestant that guesses closest to the price
 * without going over wins the round.
 *
 * Write a function that takes the price and the guesses from the contestants, and
 * determines the winner of the round by returning the index of the winning guess. If
 * a winner is not found, return -1.
 *
 * eg.
 * priceIsRight(20, [21, 32, 4, 12]) => 3
 * priceIsRight(30, [36, 67, 90]) => -1
 * priceIsRight(20, [21, 19, 32, 4, 12]) => 1
 */
