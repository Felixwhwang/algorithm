var moveZeroes = function (nums) {
  for(let i = nums.length - 1; i >= 0; i--) {
    if(!nums[i]) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }
  return nums;
};

console.log(moveZeroes([0,0,1]));
