/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if(n === 0) return 1;
  if(n < 0) {
    x = 1 / x;
    n = -n;
  }
  return fastpow(x, n);
};

var fastpow = function (x, n) {
  if(n === 1) return x;
  let half = fastpow(x, Math.floor(n/2));
  if(n % 2 === 0) return half * half;
  else return half * half * x;
}
