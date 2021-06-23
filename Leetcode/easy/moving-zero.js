/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let p1 = 0, p2 = 1, temp = 0;
  while(p2 < nums.length) {
    if(nums[p1] !== 0) {
      p1++;
      p2++;
    } else {
      if(nums[p2] !== 0) {
        temp = nums[p2];
        nums[p2] = nums[p1];
        nums[p1] = temp;
        p1++;
        p2 = p1 + 1;
      } else {
        p2++;
      }
    }
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
