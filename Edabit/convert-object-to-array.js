// Write a function that converts an object into an array, where each element represents a key - value pair.

//   Examples
// toArray({ a: 1, b: 2 }) ➞[["a", 1], ["b", 2]]

// toArray({ shrimp: 15, tots: 12 }) ➞[["shrimp", 15], ["tots", 12]]

// toArray({}) ➞[]
// Notes
// Return an empty array if the object is empty.


// function toArray(obj) {
//   return Object.entries(obj);
// }

const toArray = obj => {
  let result = [];
  for(const key in obj) {
    result.push([key, obj[key]]);
  }
  return result;
}

console.log(toArray({ a: 1, b: 2 }));
