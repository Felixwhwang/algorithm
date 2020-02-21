/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  const input = s.split('');
  let sum = 0;
  for(let i = 0; i < input.length - 1; i++) {
    if( map[input[i]] >= map[input[i + 1]] ) {
      sum += map[input[i]];
    } else {
      sum -= map[input[i]];
    }
  }
  sum += map[input[input.length - 1]];
  return sum;
};

console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));
