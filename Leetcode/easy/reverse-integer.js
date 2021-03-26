// 7. Reverse Integer
// var reverse = x => {
//   let sign;
//   if (x < 0) {
//     sign = -1;
//     x *= sign;
//   }
//   else sign = 1;
//   let answer =  Number(x.toString().split('').reverse().join('')) * sign;
//   if (answer < -Math.pow(2, 31) || answer > Math.pow(2, 31) - 1)
//     return 0;
//   return answer;
// }

var reverse = x => {
  let rev = 0;
  while(x !== 0) {
    pop = x % 10;
    x = Math.trunc(x/10);
    rev = rev * 10 + pop;
  }
  if (rev < -Math.pow(2, 31) || rev > Math.pow(2, 31) - 1)
     return 0;
  return rev;
}

console.log(reverse(-123));
