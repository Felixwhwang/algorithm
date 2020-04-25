// Tidy Title and Author Strings
// You have an array of strings, each consisting of a book title and an author's name.

// To illustrate:

// [
//   ["   Death of a Salesman - Arthur Miller    "],
//   ["   Macbeth - William Shakespeare    "],
//   ["    A Separate Peace - John Knowles     "],
//   [" Lord of the Flies - William Golding"],
//   ["A Tale of Two Cities - Charles Dickens"]
// ]
// Create a function that takes an array like the one above and transforms it into the same format as the one below:

// [
//   ["Death of a Salesman", "Arthur Miller"],
//   ["Macbeth", "William Shakespeare"],
//   ["A Separate Peace", "John Knowles"],
//   ["Lord of the Flies", "William Golding"],
//   ["A Tale of Two Cities", "Charles Dickens"]
// ]
// Examples
// tidyBooks([
//   "     The Catcher in the Rye - J. D. Salinger    ",
//   "    Brave New World - Aldous Huxley   ",
//   "    Of Mice and Men - John Steinbeck    "
// ]) ➞[
//   "The Catcher in the Rye", "J. D. Salinger",
//   "Brave New World", "Aldous Huley",
//   "Of Mice and Men", "John Steinbeck"
// ]
// Some of these entries have excess white space.Remove this white space in your final output.

const tidyBooks = arr => {
  let newArr = arr.map(cur => {
    return cur.split(' - ');
  });
  let result = [];
  for(let index = 0; index < newArr.length; index++) {
    let left = newArr[index][0];
    let right = newArr[index][1];
    for (let i = 0; i < left.length; i++) {
      if (left[i] !== ' ') {
        left = left.substring(i);
        break;
      }
    }
    for (let j = right.length - 1; j >= 0; j--) {
      if (right[j] !== ' ') {
        right = right.substring(0, j + 1);
        break;
      }
    }
    result.push([left, right]);
  }
  return result;
}

console.log(tidyBooks(["     The Catcher in the Rye - J. D. Salinger    ",
  "    Brave New World - Aldous Huxley   ",
  "    Of Mice and Men - John Steinbeck    "]) );
