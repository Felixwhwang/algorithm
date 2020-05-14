// One Odd and One Even
// Given a two digit number, return true if that number contains one even and one odd digit.

//   Examples
// oneOddOneEven(12) ➞ true

// oneOddOneEven(55) ➞ false

// oneOddOneEven(22) ➞ false
// Notes
// N / A

const oneOddOneEven = n => {
  let newNum = Math.floor(n / 10) + n % 10;
  return newNum % 2 === 1 ? true : false;
}

console.log(oneOddOneEven(12));
