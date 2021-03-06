// let a = [3, 4, 6, 8, 1, 2, 3, 4, 5, 6, 4, 3, 2];
// // let a = [3,2,4,3,4,2,3];

// const partition = (array, left, right) => {
//   let pivot = array[Math.floor((left + right) / 2)];
//   while (left <= right) {
//     while (array[left] < pivot) {
//       left++;
//     }
//     while (array[right] > pivot) {
//       right--;
//     }
//     if (left <= right) {
//       [array[left], array[right]] = [array[right], array[left]];
//       left++;
//       right--;
//     }
//   }
//   return left;
// }

// const quickSort = (array, left, right) => {
//   let index;
//   if (array.length > 1) {
//     index = partition(array, left, right);
//     if (index - 1 > left) {
//       quickSort(array, left, index - 1);
//     }
//     if (index < right) {
//       quickSort(array, index, right);
//     }
//   }
//   return array;
// }

// console.log(quickSort(a, 0, a.length - 1));
let array = [3, 4, 6, 8, 1, 2, 3, 4, 5, 6, 4, 3, 2];

//partition time complexity is n
const partition = (array, left, right) => {
  const pivot = Math.floor((left + right) / 2);
  while(left <= right) {
    while(array[left] < array[pivot]) {
      left++;
    }
    while(array[right] > array[pivot]) {
      right--;
    }
    if(left <= right) {
      [array[right], array[left]] = [array[left], array[right]];
      left++;
      right--;
    }
  }
  return left;
}

const quickSort = (array, left, right) => {
  let index;
  if(array.length > 1) {
    index = partition(array, left, right);
    if(left < index - 1) {
      quickSort(array, left, index - 1);
    }
    if(right > index) {
      quickSort(array, index, right);
    }
  }

  return array;
}

console.log(quickSort(array, 0, array.length - 1));
