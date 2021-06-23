/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let hash = {};
  for(let i = 0; i < s.length; i++) {
    if(hash[s[i]]) hash[s[i]][0]++;
    else hash[s[i]] = [1, i];
  }
  console.log(hash);
  for(let key in hash) {
    if(hash[key][0] === 1) return hash[key][1];
  }
  return -1;
};

var firstUniqChar = function (s) {
  let m = new Map();
  for(let i = 0; i < s.length; i++) {
    m.has(s[i]) ? m.set(s[i], -1) : m.set(s[i], i);
  }
  for(let [key, val] of m) {
    if(val !== -1) return val;
  }
  return -1;
}

console.log(firstUniqChar("loveleetcode"));
