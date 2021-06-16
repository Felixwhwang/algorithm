/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let beg = 0;
  let end = x;
  let mid = 0;
  let num = -1;
  while(beg <= end) {
    mid = parseInt((beg + end) / 2);
    if(mid*mid >= x) {
      console.log(mid);
      num = mid;
      end = mid - 1;
    } else {
      beg = mid + 1;
    }
  }
  if(num*num === x) return num;
  return num-1;
};

console.log(mySqrt(8));
console.log(parseInt(3.9));
