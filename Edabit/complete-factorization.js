// Complete Prime Factorization
// Create a function that decomposes an integer into its prime factors, ordered from smallest to largest.

// For instance:

// completeFactorization(24) = [2, 2, 2, 3]
// // Since 24 = 8 x 3 = 2^3 x 3 = 2 x 2 x 2 x 3
// Examples
// completeFactorization(10) ➞[2, 5]

// completeFactorization(9) ➞[3, 3]

// completeFactorization(72) ➞[2, 2, 2, 3, 3]

const completeFactorization = num => {
  let result = [];
  let prime = 2;
  while( num !== 1 ) {
    if(num % prime === 0) {
      num /= prime;
      result.push(prime);
    } else {
      prime++;
    }
  }
  return result;
}
