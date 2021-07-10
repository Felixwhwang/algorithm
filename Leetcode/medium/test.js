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
  let mid = Math.floor(arr.length / 2);
  if (arr.length < 2) {
    return arr;
  }
  let left = arr.splice(0, mid);
  return merge(MergeSort(left), MergeSort(arr));
}

console.log(MergeSort([2, 1, 3, 6, 12, 12, 0, 39, 9]));
