//it's a sorted array

const binarySearchInterative = (arr, k) => {
  let left = 0;
  let right = arr.length - 1;
  let mid;
  while(left <= right) {
    mid = parseInt((left + right) / 2);
    if(arr[mid] <= k) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return mid;
}

// console.log(binarySearchInterative([1, 2, 3, 4, 6, 32, 141, 422], 422));

const binarySearchRecursive = (arr, k, left, right) => {
  if(left > right) return false;
  let mid = parseInt((left + right) / 2);
  if(arr[mid] === k) {
    return mid;
  }
  else if (arr[mid] < k) {
    return binarySearchRecursive(arr, k, mid + 1, right);
  } else {
    return binarySearchRecursive(arr, k, left, mid - 1);
  }
}

console.log(binarySearchRecursive([1, 2, 3, 4, 6, 32, 141, 422], 422, 0, 7));
