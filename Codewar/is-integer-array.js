// Write a function with the signature shown below:

// function isIntArray(arr) {
//   return true
// }
// returns true / True if every element in an array is an integer or a float with no decimals.
// returns true / True if array is empty.
// returns false / False for every other input.

// const isIntArray = arr => {
//   if (!arr) return false;
//   for(let index = 0; index < arr.length; index++) {
//     if(!Number.isInteger(arr[index])) {
//       return false;
//     }
//   }
//   return true;
// }

const isIntArray = arr => {
  return !!arr && arr.every(Number.isInteger);
}
