// Primal Strength
// In number theory, a prime number is balanced if it is equidistant from the prime before it and the prime after it.It is therefore the arithmetic mean of those primes.For example, 5 is a balanced prime, two units away from 3, and two from 7. 211 is 12 units away from the previous prime, 199, and 12 away from the next, 223.

// A prime that is greater than the arithmetic mean of the primes before and after it is called a strong prime.It is closer to the prime after it than the one before it.For example, the strong prime 17 is closer to 19 than it is to 13(see note at bottom).

// A prime that is lesser than the arithmetic mean of the primes before and after it is called weak prime.For example, 19.

// Create a function that takes a prime number as input and returns "Strong" if it is a strong prime, "Weak" if it is a weak prime, or "Balanced".

//   Examples
// primalStrength(211) ➞ "Balanced"

// primalStrength(17) ➞ "Strong"

// primalStrength(19) ➞ "Weak"
// Notes
// This definition of strong primes is not to be confused with strong primes as defined in cryptography, which are much more complicated than this.You are all welcome to make a challenge based on cryptographically strong primes.

const primalStrength = prime => {
  let strong = prime + 1;
  let weak = prime - 1;
  let checkStrong = true;
  let checkWeak = true;
  do {
    checkStrong = true;
    checkWeak = true;
    for(let index = 2; index < strong; index++) {
      if (strong % index === 0) {
        checkStrong = false;
      }
    }
    for (let index = 2; index < weak; index++) {
      if (weak % index === 0) {
        checkWeak = false;
      }
    }
    strong++;
    weak--;
  } while(!checkStrong && !checkWeak)

  if (checkStrong === true && checkWeak === true) {
    return 'Balanced';
  } else if (checkStrong === true) {
    return 'Strong';
  } else {
    return 'Weak';
  }
}
