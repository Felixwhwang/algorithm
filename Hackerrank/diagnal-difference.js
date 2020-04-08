// 3
// 11 2 4
// 4 5 6
// 10 8 -12

// 1 1 1 1
// 1 1 1 1
// 1 1 1 1
// 1 1 1 1

// let a = [3, [11,2,4], [4,5,6], [10, 8, -12]];
let a = [11,2,4,4,5,6,10,8,-12];

// 1. get rows and column which is first element in array, matrix = arr[0]
// 2. loop rest elements in arr, each element is an arr which is each line of numbers
//    declare left = 0, right = matrix - 1
//    declare leftSum, rightSum, both are 0
//    leftSum += arr[i][left];
//    rightSum += arr[i][right];
//    left++;
//    right--;
// get absoute of leftSum - rightSum


function diagonalDifference(arr) {
  const matrix = Math.pow(arr.length, 1/2);
  let matrixArr = [matrix];
  let tempArr = [];
  let key = 0;
  for(let i = 0; i < arr.length; i++) {
    if(key < matrix) {
      tempArr.push(arr[i]);
      key++;
    } else {
      matrixArr.push(tempArr);
      tempArr = [arr[i]];
      key = 1;
    }
  }
  matrixArr.push(tempArr);

  let left = 0;
  let right = matrix - 1;
  let leftSum = 0;
  let rightSum = 0;
  for(let i = 1; i <= matrix; i++) {
    leftSum += matrixArr[i][left];
    rightSum += matrixArr[i][right];
    left++;
    right--;
  }

  return Math.abs(leftSum - rightSum);
}

console.log(diagonalDifference(a));
