const solution = arr => {
  for(let index = 0; index < arr.length; index++) {
    let pattern = arr[index][1] - arr[index][0];
    for(let j = 2; j < arr[index].length; j++) {
      if(arr[index][j] - arr[index][j-1] !== pattern) return false;
    }
  }

  let rowLen = arr[0].length;
  for(let index = 0; index < rowLen; index++) {
    let pattern = arr[0][index] - arr[1][index];
    for(let j = 2; j < arr.length - 1; j++) {
      if(arr[j][index] - arr[j+1][index] !== pattern) return false;
    }
  }
  return true;
}

const basicSolved = [
  [23, 28, 33],
  [19, 18, 17],
  [15, 8, 1]
];

const basicIncorrect = [
  [23, 28, 32],
  [19, 18, 17],
  [16, 8, 1]
];

console.log(solution(basicIncorrect) );
