// Decimal And Binary Palindromes
// A number / string is a palindrome if the digits / characters are the same when read both forward and backward.Examples include "racecar" and 12321. Given a positive number n, check if n or the binary representation of n is palindromic.Return the following:

// "Decimal only." if only n is a palindrome.
// "Binary only." if only the binary representation of n is a palindrome.
// "Decimal and binary." if both are palindromes.
// "Neither!" if neither are palindromes.
//   Examples
// palindromeType(1306031) ➞ "Decimal only."
// // decimal = 1306031
// // binary  = '100111110110110101111'

// palindromeType(427787) ➞ "Binary only."
// // decimal = 427787
// // binary  = '1101000011100001011'

// palindromeType(313) ➞ "Decimal and binary."
// // decimal = 313
// // binary  = 100111001

// palindromeType(934) ➞ "Neither!"
// // decimal = 934
// // binary  = '1110100110'
// Notes
// See the resources section for ways to convert to binary.

const palindromeType = num => {
  let decimalCheck = num.toString() === [...num.toString()].reverse().join('');
  let binaryCheck = num.toString(2) === [...num.toString(2)].reverse().join('');
  if(decimalCheck && binaryCheck) return 'Decimal and binary.';
  if(decimalCheck) return 'Decimal only.';
  if(binaryCheck) return 'Binary only.';
  return 'Neither!';
}

console.log(palindromeType(423));
