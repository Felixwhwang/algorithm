/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if(s.length !== t.length) return false;
  let hash = {};
  for(let i = 0; i < s.length; i++) {
    if(hash[s[i]]) {
      hash[s[i]]++;
    } else {
      hash[s[i]] = 1;
    }
  }

  for(let i = 0; i < t.length; i++) {
    if(hash[t[i]]) {
      hash[t[i]]--;
    } else {
      return false;
    }
  }

  for(let key in hash) {
    if(hash[key] !== 0) return false;
  }
  return true;
};

console.log(isAnagram("anagram", "nagaram"));
