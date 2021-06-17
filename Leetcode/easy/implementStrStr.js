/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// var strStr = function (haystack, needle) {
//   if(needle.length === 0) return 0;
//   let check = true;
//   for(let i = 0; i < haystack.length; i++) {
//     if(haystack[i] === needle[0]) {
//       for(let j = 1; j < needle.length; j++) {
//         if(haystack[i+j] !== needle[j]) {
//           check = false;
//           break;
//         }
//       }
//       if(check === true) return i;
//     }
//     check = true;
//   }
//   return -1;
// };

var strStr = function (haystack, needle) {
  if(!needle.length) return 0;
  let i = 0;
  let s = 0;
  while(i < haystack.length - needle.length + 1) {
    if(haystack[i+s] !== needle[s]) {
      i++;
      s = 0;
    }
    else {
      s++;
      if(s === needle.length) return i;
    }
  }
  return -1;
}

console.log(strStr("mississippi", "issip"));
