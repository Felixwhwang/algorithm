/**
 * @param {string[]} strs
 * @return {string}
 */
// var longestCommonPrefix = function (strs) {
//   if (strs.length === 0) return '';
//   let output = '';
//   let cur = 0;

//   while (cur < strs[0].length) {
//     for (let i = 1; i < strs.length; i++) {
//       if (strs[0][cur] !== strs[i][cur]) return output;
//     }
//     output += strs[0][cur];
//     cur++;
//   }

//   return output;
// };

// console.log(longestCommonPrefix(["flower", "flow", "flight"]));


var longestCommonPrefix = function (strs) {
  if(strs.length === 0) return '';
  if(strs.length === 1) return strs[0];
  let output = LCP(strs[0], strs[1]);
  for(let i = 2; i < strs.length; i++) {
    if(output === '') return '';
    output = LCP(output, strs[i]);
  }
  return output;
};

const LCP = (str1, str2) => {
  let result = '';
  for(let i = 0; i < str1.length; i++) {
    if(str1[i] !== str2[i]) return result;
    result +=str1[i];
  }
  return result;
}
