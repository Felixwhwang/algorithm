/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let res = 0, pow = 31;
  while (n > 0) {
    let rightMost = n & 1;
    if (rightMost === 1) {
      res++;
    }
    n = n >>> 1;
  }
  return res;
};
