let map = new Map();
map.set('a', true);

var majorityElement = function (nums) {
  let m = new Map(), halfLen = Math.floor(nums.length / 2);
  for (let num of nums) {
    console.log(m.get(num));
    m.set(num, m.get(num) + 1 || 1);
    if (m.get(num) > halfLen) return num;
  }
};

console.log(majorityElement([2,1,2,1,2,1,1,1,4,4,4,4,4,4,4,4]));
console.log(undefined + 1 || 2);
