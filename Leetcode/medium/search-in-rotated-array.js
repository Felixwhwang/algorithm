/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var search = function (nums, target) {
//   let index;
//   if(target >= nums[0]) {
//     index = target - nums[0];
//   } else {
//     index = nums.length - (nums[0] - target);
//   }
//   if (nums[index] === target) return index;
//   else if(nums[index + 1] === target) return index + 1;
//   else if(nums[index - 1] === target) return index - 1;
//   else return -1;
// };
//[1,3,5] not working
var search = function (nums, target) {
  if(!nums) return -1;
  let low = 0, high = nums.length - 1;
  let firstVal = nums[0];
  while(low <= high) {
    let mid = Math.floor((high + low) / 2);
    let inCorrectArr = (target >= firstVal && nums[mid] >= firstVal)
                    || (target < firstVal && nums[mid] < firstVal);
    if(target < nums[mid]) {
      inCorrectArr ? high = mid - 1 : low = mid + 1;
    } else if (target > nums[mid]) {
      inCorrectArr ? low = mid + 1 : high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}


console.log(search([4, 5, 6, 7, 8, 9, 0, 1, 2], 0));
