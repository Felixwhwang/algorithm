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

const merge = (leftArr, rightArr) => {
  let arr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      arr.push(leftArr.shift());
    } else {
      arr.push(rightArr.shift());
    }
  }
  return [...arr, ...leftArr, ...rightArr];
}

const MergeSort = arr => {
  let mid = Math.floor(arr.length/2);
  if(arr.length < 2) {
    return arr;
  }
  let left = arr.splice(0, mid);
  return merge(MergeSort(left), MergeSort(arr));
}

console.log(MergeSort([2, 1, 3, 6, 12, 1, 4, 45, 12, 0, 39, 9]));
