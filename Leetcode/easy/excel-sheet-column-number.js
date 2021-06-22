/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let l = columnTitle.length - 1;
  let result = 0;
  for(let s of columnTitle) {
    result += (s.charCodeAt(0) - 64) * Math.pow(26, l);
    l--;
  }
  return result;
};

console.log(titleToNumber('ZY'));
