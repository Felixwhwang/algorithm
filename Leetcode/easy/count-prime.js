/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  let primes = new Array(n).fill(true);
  primes[0] = false;
  primes[1] = false;

  for(let i = 2; i < Math.sqrt(n); i++) {
    for(let j = 2; j * i < n; j++) {
      primes[j * i] = false;
    }
  }

  return primes.filter(bool => bool === true).length;
};

console.log(countPrimes(5));
