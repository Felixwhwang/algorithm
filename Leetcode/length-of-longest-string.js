/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let result = '';
  let current = '';
  for (let i = 0; i < s.length; i++) {
    current = s[i];
    for (let j = i + 1; j < s.length; j++) {
      if (current.indexOf(s[j]) === -1) {
        current += s[j];
      } else {
        break;
      }
    }
    if (current.length > result.length) {
      result = current;
    }
  }
  if (current.length > result.length) {
    result = current;
  }
  return result.length;
};

console.log( lengthOfLongestSubstring('dvdf') );
