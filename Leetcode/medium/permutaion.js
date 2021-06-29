/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var helper = function (nums, cur, res) {
  if(nums.length === 0) {
    res.push([...cur]);
    return;
  }
  for(let i = 0; i < nums.length; i++) {
    cur.push(nums[i]);
    nums.splice(i, 1);
    helper(nums, cur, res);
    nums.splice(i, 0, cur.pop());
  }
}

var permute = function (nums) {
  let res = [], cur = [];
  helper(nums, cur, res);
  return res;
};

console.log(permute([1,2,3]))
