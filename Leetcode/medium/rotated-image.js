/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let n = matrix.length - 1;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n - i; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[n - j][i];
      matrix[n - j][i] = matrix[n - i][n - j];
      matrix[n - i][n - j] = matrix[j][n - i];
      matrix[j][n - i] = temp;
    }
  }
  return matrix;
};

var rotate = function (matrix) {
  //transposed
  let n = matrix.length;
  for(let i = 0; i < n; i++) {
    for(let j = i; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  //reversed
  for(let i = 0; i < n; i++) {
    let p1 = 0, p2 = n - 1;
    while(p1 <= p2) {
      [matrix[i][p1], matrix[i][p2]] = [matrix[i][p2], matrix[i][p1]];
      p1++;
      p2--;
    }
  }
  return matrix;
}
// console.log(rotate(
//   [[1, 2, 3],
//    [4, 5, 6],
//    [7, 8, 9]])
// );

console.log(rotate(
  [[5, 1, 9, 11],
   [2, 4, 8, 10],
   [13, 3, 6, 7],
   [15, 14, 12, 16]]
));
