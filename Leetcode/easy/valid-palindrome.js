/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let letter = /[a-zA-Z0-9]/;
  let p1 = 0, p2 = s.length - 1;
  while(p1 <= p2) {
    while(!letter.test(s[p1])) {
      p1++;
    }
    while(!letter.test(s[p2])) {
      p2--;
    }
    if(p1 > s.length || p2 < 0) {
      return true;
    }
    if (s[p1++].toLowerCase() !== s[p2--].toLowerCase()) {
      return false;
    }
  }
  return true;
};

// [\W_] is all non-alphanumric and undersocore
var isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[\W_]/g, '');
  let p1 = 0, p2 = s.length - 1;
  while(p1 <= p2) {
    if(s[p1++] !== s[p2--]) return false;
  }
  return true;
}
