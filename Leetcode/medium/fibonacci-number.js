/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if(n <= 1) return n;
  let pp = 0, p = 1, res = 0;
  for(let i = 2; i <= n; i++) {
    res = pp + p;
    pp = p;
    p = res;
  }
  return res;
};


var fib = function(n, memo = new Map()) {
  if(n === 0) return 0;
  if(n === 1) return 1;
  if(memo.has(n)) return memo.get(n);
  let res = fib(n - 1, memo) + fib(n - 2, memo);
  memo.set(n, res);
  return res;
}
