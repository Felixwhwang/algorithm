// Word Buckets
// Write a function that divides a phrase into word buckets, with each bucket containing n or fewer characters.Only include full words inside each bucket.

//   Examples
// bucketize("she sells sea shells by the sea", 10)
// ➞["she sells", "sea shells", "by the sea"]

// bucketize("the mouse jumped over the cheese", 7)
// ➞["the", "mouse", "jumped", "over", "the", "cheese"]

// bucketize("fairy dust coated the air", 20)
// ➞["fairy dust coated", "the air"]

// bucketize("a b c d e", 2)
// ➞["a", "b", "c", "d", "e"]
// Notes
// Spaces count as one character.
// Trim beginning and end spaces for each word bucket(see final example).
// If buckets are too small to hold a single word, return an empty array: []
// The minimum size of the bucket has to be valid for every word(or cluster of words).
// The final goal isn't to return just the words with a length equal (or lower) to the given n, but to return the entire given phrase bucketized (if possible). So, for the specific case of "by" the only word with a proper length, the phrase can't be bucketized, and the returned array has to be empty.


const bucketize = (phrase, n) => {
  let phraseArr = phrase.split(' ');
  let result = [];
  let currentBucket = '';
  let currentLength = null;
  for(let index = 0; index < phraseArr.length; index++) {
    if(phraseArr[index].length > n) {
      return result;
    } else {
      if (currentBucket !== '') {
        currentLength = currentBucket.length + phraseArr[index].length + 1;
        if(currentLength > n) {
          result.push(currentBucket);
          currentBucket = '';
          currentLength= 0;
          index--;
        } else {
          currentBucket += ' ' + phraseArr[index];
        }
      } else {
        currentBucket += phraseArr[index];
      }
    }
  }
  if(currentBucket !== '') {
    result.push(currentBucket);
  }
  return result;
}

console.log( bucketize("she sells sea shells by the sea", 10) );
