/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let hashmap = new Map();
  for(let i = 0; i < nums.length; i++) {
    hashmap.has(nums[i]) ? hashmap.set(nums[i], hashmap.get(nums[i]) + 1) : hashmap.set(nums[i], 1);
  }
  for(let key of hashmap.keys()) {
    console.log(hashmap.get(key));
    if(hashmap.get(key) === 1) {
      return key;
    }
  }
};

var singleNumber = function (nums) {
  let set = new Set()
  for (let i = 0; i < nums.length; i++) {
    set.has(nums[i]) ? set.delete(nums[i]) : set.add(nums[i]);
  }
  return Array.from(set)[0];
};


console.log(singleNumber([4,1,2,1,2]));
