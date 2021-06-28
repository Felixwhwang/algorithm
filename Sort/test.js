// const merge = (leftArr, rightArr) => {
//   let arr = [];
//   let p1 = 0, p2 = 0;
//   while(p1 < leftArr.length && p2 < rightArr.length) {
//     if(leftArr[p1] <= rightArr[p2]) {
//       arr.push(leftArr[p1]);
//       p1++;
//     } else {
//       arr.push(rightArr[p2]);
//       p2++;
//     }
//   }

//   if(p1 === leftArr.length) {
//     while(p2 < rightArr.length) {
//       arr.push(rightArr[p2]);
//       p2++;
//     }
//   } else {
//     while(p1 < leftArr.length) {
//       arr.push(leftArr[p1]);
//       p1++;
//     }
//   }

//   return arr;
// }

const merge = (left, right) => {
  let arr = [];
  while(left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  return [...arr, ...left, ...right];
}

const MergeSort = arr => {
  let mid = Math.floor(arr.length/2);
  if(arr.length === 1) {
    return arr;
  }
  let left = arr.splice(0, mid);
  let right = arr;
  return merge(MergeSort(left), MergeSort(right));
}

console.log(MergeSort([4,2,6,7,1,3,8,9]));
