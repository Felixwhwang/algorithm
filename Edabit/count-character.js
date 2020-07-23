// Count Instances of a Character in a String
// Create a function that takes two strings as arguments and returns the number of times the first string(the single character) is found in the second string.

//   Examples
// charCount("a", "edabit") ➞ 1

// charCount("c", "Chamber of secrets") ➞ 1

// charCount("b", "big fat bubble") ➞ 4
// Notes
// Your output must be case -sensitive(see second example).

const charCount = (key, str) => {
  return str.split('').reduce((sum, cur) => {
    if(key === cur) return ++sum;
    return sum;
  }, 0);
}
console.log(charCount("a", "Big fat bubble"));
