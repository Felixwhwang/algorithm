/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let st = new Set();
  for (let i = 0; i < nums.length; i++) {
    st.add(nums[i]);
  }
  for (let i = 0; i <= nums.length; i++) {
    if (!st.has(i)) {
      return i;
    }
  }
  return false;
};
