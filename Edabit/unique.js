// Which Number Is Not like the Others ?
//   Create a function that takes an array of numbers and return the number that's unique.

// Examples
// unique([3, 3, 3, 7, 3, 3]) ➞ 7

// unique([0, 0, 0.77, 0, 0]) ➞ 0.77

// unique([0, 1, 1, 1, 1, 1, 1, 1]) ➞ 0
// Notes
// Test cases will always have exactly one unique number while all others are the same.

const unique = arr => {
  if(arr[0] === arr[1]) {
    for(let index = 2; index < arr.length; index++) {
      if(arr[index] !== arr[0]) return arr[index];
    }
  } else if(arr[0] === arr[2]) {
    return arr[1];
  } else {
    return arr[0];
  }
}

// cosnt unique = a => a.find(x => a.indexOf(x) == a.lastIndexOf(x))
