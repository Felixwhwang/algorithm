//1. Two Sum
// var twoSum = (nums, target) => {
//   for(let i = 0; i < nums.length - 1; i++) {
//     for(let j = i + 1; j < nums.length; j++) {
//       if(nums[i] + nums[j] === target)
//         return [i, j];
//     }
//   }

//   return 'no answer found';
// }

// var twoSum = (nums, target) => {
//   for(let i = 0; i < nums.length; i++) {
//     let pairIndex = nums.lastIndexOf(target - nums[i]);
//     if(pairIndex != i && pairIndex >= 0)
//       return [i, pairIndex];
//   }
// }

var twoSum = (nums, target) => {
  let hashTable = {};
  let targetMinusCurrent;
  for(let i = 0; i < nums.length; i++) {
    targetMinusCurrent = target - nums[i];
    if(hashTable[targetMinusCurrent] != undefined) {
      return [i, hashTable[targetMinusCurrent]];
    }
    hashTable[nums[i]] = i;
  }
}

console.log(twoSum([11,15,2,7], 9));
