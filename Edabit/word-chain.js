// Word Chain
// A word - chain is an array of words, where the next word is formed by changing exactly one letter from the previous word.We do not add or subtract letters from words, only change them.

// Create a function that returns true if an array is a word - chain and false otherwise.

//   Examples
// isWordChain(["meal", "seal", "seat", "beat", "beet"]) ➞ true
// // Change "m" in "meal" to get "seal", "l" to get "seat", etc.

// isWordChain(["red", "bed", "bet", "bat", "sat"]) ➞ true

// isWordChain(["red", "bat", "cat", "sat"]) ➞ false
// // Do not change more than one letter ("red" and "bat").

// isWordChain(["read", "red", "led", "lad", "lady"]) ➞ false
// // Do not add or subtract letters.

const isWordChain = words => {
  let currentWord = words[0];
  let check = 0;
  for(let index = 1; index < words.length; index++) {
    if(currentWord.length !== words[index].length) return false;
    for(let j = 0; j < currentWord.length; j++) {
      if(currentWord[j] !== words[index][j]) check++;
      if(check === 2) return false;
    }
    if(check === 0) return false;
    check = 0;
    currentWord = words[index];
  }
  return true;
}
