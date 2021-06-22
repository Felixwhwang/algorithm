/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const sumSquareSum = num => {
    let sum = 0;
    while(n > 0) {
      sum += Math.pow(n % 10, 2);
      n = ~~(n / 10);
    }
    return sum;
  }
  let st = new Set();
  while(n > 0) {
    if(n === 1) return true;
    n = sumSquareSum(n);
    if(st.has(n)) {
      return false;
    } else {
      st.add(n);
    }
  }
};

console.log(isHappy(19));
