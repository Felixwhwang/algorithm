/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// var merge = function (nums1, m, nums2, n) {
//   if(m === 0 && n === 0) return [];
//   if(m === 0) return nums2.slice(0, n);
//   if(n === 0) return nums1.slice(0, m);
//   let p1 = 0;
//   let p2 = 0;
//   let mergedArr = [];
//   while(m > 0 || n > 0) {
//     if(m === 0){
//       mergedArr.push(nums2[p2]);
//       p2++;
//       n--;
//     } else if(n === 0){
//       mergedArr.push(nums1[p1]);
//       p1++;
//       m--;
//     } else if(nums1[p1] <= nums2[p2]){
//       mergedArr.push(nums1[p1]);
//       p1++;
//       m--;
//     } else {
//       mergedArr.push(nums2[p2]);
//       p2++;
//       n--;
//     }
//   }
//   nums1 = mergedArr;
//   return nums1;
// };

var merge = function (nums1, m, nums2, n) {
  let nums1Id = m + n - 1;
  let a = m - 1;
  let b = n - 1;
  while(a >= 0 && b >= 0) {
    if(nums1[a] > nums2[b]) {
      nums1[nums1Id] = nums1[a];
      nums1Id--;
      a--;
    } else {
      nums1[nums1Id] = nums2[b]
      nums1Id--;
      b--;
    }
  }
  while(b >= 0) {
    nums1[nums1Id] = nums2[b];
    nums1Id--;
    b--;
  }
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
