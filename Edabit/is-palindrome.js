// Check if the String is a Palindrome
// A palindrome is a word, phrase, number or other sequence of characters which reads the same backward or forward, such as madam or kayak.

// Write a function that takes a string and determines whether it's a palindrome or not. The function should return a boolean (true or false value).

// Examples
// isPalindrome("Neuquen") ➞ true

// isPalindrome("Not a palindrome") ➞ false

// isPalindrome("A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama!") ➞ true

const isPalindrome = str => {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const filteredStr = str.toLowerCase().split('').filter( cur => letters.indexOf(cur) !== -1).join('');
  return filteredStr === filteredStr.split('').reverse().join('');
}

console.log( isPalindrome("Not a palindrome") );
