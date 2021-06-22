/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  if (n === 0) return 0;
  return ~~(n / 5) + ~~trailingZeroes(n / 5);
};


console.log(trailingZeroes(10));
