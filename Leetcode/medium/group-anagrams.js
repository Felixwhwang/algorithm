/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = {};
  let res = [];
  for(let i = 0; i < strs.length; i++) {
    let key = wordSort(strs[i]);
    if(map[key]) {
      map[key] = [...map[key], strs[i]];
    } else {
      map[key] = [strs[i]];
    }
  }
  for(let key in map) {
    res.push(map[key]);
  }
  return res;
};

const wordSort = word => {
  return word.split('').sort().join('');
}

/******************************/

const groupAnagrams2 = strs => {
  let map = new Map();
  let res = [];
  strs.forEach(word => {
    let sortedWord = word.split('').sort().join('');
    if(map.has(sortedWord)) {
      map.get(sortedWord).push(word);
    } else {
      map.set(sortedWord, [word]);
    }
  });
  map.forEach(value => {
    res.push(value);
  })
  return res;
}

var groupAnagrams3 = function (strs) {
  let map = {};
  for(let word of strs) {
    let sortedWord = word.split('').sort().join('');
    map[sortedWord] ? map[sortedWord].push(word) : map[sortedWord] = [word];
  }
  return Object.values(map);
}

console.log(
  groupAnagrams3(["eat", "tea", "tan", "ate", "nat", "bat"])
);
