// LCM of Two Numbers
// Write a function that returns the least common multiple(LCM) of two integers.

//   Examples
// lcm(9, 18) ➞ 18

// lcm(8, 5) ➞ 40

// lcm(17, 11) ➞ 187
// Notes
// Both values will be positive.
// The LCM is the smallest integer that divides both numbers such that the remainder is zero.


const lcm = (num1, num2) => {
  let multiNum1 = num1;
  let multiNum2 = num2;
  while (multiNum1 !== multiNum2) {
    multiNum1 > multiNum2 ? multiNum2 += num2 : multiNum1 += num1;
  }
  return multiNum1;
}

console.log(lcm(5, 8));
