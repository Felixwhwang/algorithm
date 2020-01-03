// There exists a sequence of numbers that follows the pattern

// 1
// 11
// 21
// 1211
// 111221
// 312211
// 13112221
// 1113213211
//   .
//           .
//           .
// Starting with "1" the following lines are produced by "saying what you see", so that line two is "one one", line three is "two one(s)", line four is "one two one one".

// Write a function that given a starting value as a string, returns the appropriate sequence as a list.The starting value can have any number of digits.The termination condition is a defined by the maximum number of iterations, also supplied as an argument.

const lookAndSay = (data, len) => {
  let result = [];
  let counter = 0;
  while( counter < len) {
    let current = data[0];
    let nums = 0;
    let tempResult = '';
    for (let index = 0; index < data.length; index++) {
      if (current === data[index]) {
        nums++;
      } else {
        tempResult += nums + current;
        nums = 1;
        current = data[index];
      }
    }
    result.push(tempResult + nums + current);
    data = result[result.length - 1];
    counter++;
  }
  return result;
}

console.log(lookAndSay('1', 5));
