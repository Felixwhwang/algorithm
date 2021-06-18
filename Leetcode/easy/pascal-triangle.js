/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let result = [[1]];
  let i = 1;
  while(i < numRows) {
    let ini = [1];
    for(let j = 0; j < i - 1; j++) {
      ini.push(result[i - 1][j] + result[i - 1][j + 1]);
    }
    ini.push(1);
    result.push(ini);
    i++;
  }
  return result;
};
console.log(generate(5));
