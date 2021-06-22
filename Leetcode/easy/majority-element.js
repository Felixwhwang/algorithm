/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  if(nums.length === 1) return nums[0];
  let hashtable = {};
  for(let i = 0; i < nums.length; i++) {
    if(!hashtable[nums[i]]) {
      hashtable[nums[i]] = 1;
    } else {
      hashtable[nums[i]] += 1;
      if(hashtable[nums[i]] > (nums.length / 2)) return nums[i];
    }
  }
  return false;
};

var majorityElement = function (nums) {
  let m = new Map(), halfLen = Math.floor(nums.length / 2);
  for(let num of nums) {
    m.set(num, m.get(num) + 1 || 1);
    if(m.get(num) > halfLen) return num;
  }
}

console.log(majorityElement([1]));
