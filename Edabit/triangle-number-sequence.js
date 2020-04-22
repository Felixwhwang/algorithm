// Triangular Number Sequence
// This Triangular Number Sequence is generated from a pattern of dots that form a triangle.The first 5 numbers of the sequence, or dots, are: 1, 3, 6, 10, 15. Write a function that converts n number of places with its corresponding number.

//   Examples
// triangle(1) ➞ 1

// triangle(6) ➞ 21

// triangle(215) ➞ 23220

const triangle = n => {
  let increase = 1;
  let sum = 0;
  for(let i = 0; i < n; i++) {
    sum += increase++;
  }
  return sum;
}

console.log(triangle(5));
