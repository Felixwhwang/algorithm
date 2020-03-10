// Cluster Vowels, Single Out Consonants
// Write a function that takes in a word and splits the consonants one by one, but keeps the vowels in a cluster.

// Examples
// split("beautifully") ➞["b", "eau", "t", "i", "f", "u", "l", "l", "y"]

// split("spoonful") ➞["s", "p", "oo", "n", "f", "u", "l"]

// split("swimming") ➞["s", "w", "i", "m", "m", "i", "n", "g"]
// Notes
// Vowels are: a, e, i, o, u.
// All letters will be in lower case.

const split = word => {
  let vowels = 'aeiou';
  let result = [];
  let tempstr = '';
  for(let i = 0; i < word.length; i++) {
    if(vowels.indexOf(word[i]) === -1) {
      if(tempstr !== '') {
        result.push(tempstr);
        tempstr = '';
      }
      result.push(word[i]);
    }
    else {
      tempstr += word[i];
    }
  }
  if (tempstr !== '') {
    result.push(tempstr);
  }
  return result;
}

console.log(split('beautifully'));
