// A word nest is created by taking a starting word, and generating a new string by placing the word inside itself.This process is then repeated.

//   Nesting 3 times with the word "incredible":

// start = incredible
// first = incre | incredible | dible
// second = increin | incredible | credibledible
// third = increinincr | incredible | ediblecredibledible
// The final nest is "increinincrincredibleediblecredibledible"(depth = 3).

// Given a starting word and the final word nest, return the depth of the word nest.

//   Examples
// wordNest("floor", "floor") ➞ 0

// wordNest("code", "cocodccococodededeodeede") ➞ 5

// wordNest("incredible", "increinincrincredibleediblecredibledible") ➞ 3
// Notes
// N / A

// const wordNest = (word, nest) => {
//   let base = word.split('').reduce( (sum, cur) => cur === word[0] ? ++sum : sum, 0);
//   let nestWord = nest.split('').reduce( (sum, cur) => cur ===word[0] ? ++sum : sum, 0);

//   return nestWord/base - 1;
// }

const wordNest = (word, nest) => {
  return nest.length / word.length - 1;
}

console.log(wordNest("incredible", "increinincrincredibleediblecredibledible"));
