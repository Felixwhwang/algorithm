// How Many Decimal Places ?
//   Create a function that returns the number of decimal places a number(given as a string) has.Any zeros after the decimal point count towards the number of decimal places.

//     Examples
// getDecimalPlaces("43.20") ➞ 2

// getDecimalPlaces("400") ➞ 0

// getDecimalPlaces("3.1") ➞ 1
// Return 0 if the number doesn't have any decimal places (see example #2).

const getDecimalPlaces = str => str.indexOf('.') === -1 ? 0 : str.split('.')[1].length;

console.log(getDecimalPlaces("3.131"));
