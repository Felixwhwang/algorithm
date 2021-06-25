/**
 * @param {string} digits
 * @return {string[]}
 */
//1. create a map about what each number contain
//2. get each number to pair next number one by one.
var letterCombinations = function (digits) {
  const map = {'2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'};
  if(digits.length === 0) return [];
  let res = map[digits[0]].split('');
  let temp = [];
  for(let i = 1; i < digits.length; i++) {
    for(let j = 0; j < res.length; j++) {
      let d = 0, m = map[digits[i]];
      while(d < m.length) {
        temp.push(res[j] + m[d]);
        d++;
      }
    }
    res = [...temp]
    temp = [];
  }
  return res;
};

console.log(letterCombinations('234'));
