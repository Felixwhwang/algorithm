/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const firstOcc = (nums, low, high, target) => {
    while(low <= high) {
      let mid = Math.floor((high + low)/2);
      if((mid === 0 || nums[mid - 1] < target) && nums[mid] === target) {
        return mid;
      } else if(target <= nums[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return -1;
  }
  let check = firstOcc(nums, 0, nums.length - 1, target);
  console.log(check);
  if (check === -1) return [-1, -1];

  const lastOcc = (nums, low, high, target) => {
    while(low <= high) {
      let mid = Math.floor((high + low) / 2);
      if((mid === nums.length - 1 || nums[mid + 1] > target) && nums[mid] === target) {
        return mid;
      } else if(target >= nums[mid]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return -1;
  }

  return [check, lastOcc(nums, 0, nums.length - 1, target)];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
