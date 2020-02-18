/**
 * @param {string} s
 * @return {string}
 */
// var longestPalindrome = function (s) {
//   let result = '';
//   let temp = '';
//   for (let i = 0; i < s.length; i++) {
//     for (let j = i; j < s.length; j++) {
//       temp += s[j];
//       if (isPalindrome(temp)) {
//         if (temp.length > result.length) {
//           result = temp;
//         }
//       }
//     }
//     temp = '';
//   }
//   return result;
// };

// const isPalindrome = s => {
//   return s === s.split('').reverse().join('');
// }



const longestPalindrome = s => {
  if (!s || s.length <= 1) {
    return s
  }
  let longest = s.substring(0, 1)
  for (let i = 0; i < s.length; i++) {
    let temp = expand(s, i, i)
    if (temp.length > longest.length) {
      longest = temp;
    }
    temp = expand(s, i, i + 1)
    if (temp.length > longest.length) {
      longest = temp;
    }
  }
  return longest;
}

const expand = (s, begin, end) => {
  while (begin >= 0 && end <= s.length - 1 && s[begin] === s[end]) {
    begin--;
    end++;
  }
  return s.substring(begin + 1, end);
}
