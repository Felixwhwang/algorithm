/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let p1 = 0, p2 = height.length - 1;
  let max = 0, w = 0, h = 0;
  while(p1 < p2) {
    w = p2 - p1;
    if(height[p1] < height[p2]) {
      h = height[p1++];
    } else {
      h = height[p2--];
    }
    max = max > w * h ? max : w * h;
  }
  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
