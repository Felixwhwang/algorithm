// Find Unique Character Strings
// Create a function that returns only strings with unique characters.

// Examples
// filterUnique(["abb", "abc", "abcdb", "aea", "bbb"]) ➞["abc"]
// // "b" occurs in "abb" more than once, "b" occurs in "abcdb" more than once, etc.

// filterUnique(["88", "999", "989", "9988", "9898"]) ➞[]

// filterUnique(["ABCDE", "DDEB", "BED", "CCA", "BAC"]) ➞["ABCDE", "BED", "BAC"]

const filterUnique = arr => {
  return arr.reduce((result, current) => {
    let temp = [];
    let isUnique = true;
    for(let i = 0; i < current.length; i++) {
      if(temp.indexOf(current[i]) === -1) {
        temp.push(current[i]);
      } else {
        isUnique = false;
        break;
      }
    }
    if(isUnique) result.push(current);
    return result;
  }, []);
}

console.log(filterUnique(["ABCDE", "DDEB", "BED", "CCA", "BAC"]));
