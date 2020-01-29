// Words that Start with a Vowel
// Write a function that retrieves all words that begin with a vowel.

//   Examples
// retrieve("A simple life is a happy life for me.") ➞["a", "is", "a"]

// retrieve("Exercising is a healthy way to burn off energy."
//   ➞["exercising", "is", "a", "off", "energy"]

// retrieve("The poor ostrich was ostracized.")
//   ➞["ostrich", "ostracized"]

// retrieve("")
//   ➞[]
// Notes
// Make all words lower case in the output.
// Retrieve the words in the order they appear in the sentence.

const retrieve = str => {
  const check = 'aeiou';
  str = str.substring(0, str.length - 1);
  str = str.toLowerCase();
  return str.split(' ').filter(cur => check.indexOf(cur[0]) !== -1);
}

console.log(retrieve("Exercising is a healthy way to burn off energy."));
