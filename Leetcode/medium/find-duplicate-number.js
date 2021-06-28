/**
 * @param {number[]} nums
 * @return {number}
 */
// var findDuplicate = function (nums) {
//   let set = new Set();
//   for(let i = 0; i < nums.length; i++) {
//     if(set.has(nums[i])) {
//       return nums[i];
//     } else {
//       set.add(nums[i]);
//     }
//   }
//   return false;
// };

var findDuplicate = function (nums) {
  let slowIndex = nums[0], fastIndex = nums[0];
  while(slowIndex < nums.length && fastIndex < nums.length) {
    fastIndex = nums[nums[fastIndex]];
    slowIndex = nums[slowIndex];
    if (fastIndex === slowIndex) {
      slowIndex = nums[0];
      while(slowIndex !== fastIndex) {
        fastIndex = nums[fastIndex];
        slowIndex = nums[slowIndex];
      }
      return fastIndex;
    }
  }
  return false;
}
//  0 1 2 3 4 5 6
// [2,6,4,1,3,1,5]
console.log(findDuplicate([2, 6, 4, 1, 3, 1, 5]));
