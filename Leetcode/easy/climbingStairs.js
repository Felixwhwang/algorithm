/**
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function (n) {
//   var climb_Stairs = function(i, n, memo) {
//     if (i > n) return 0;
//     if (i === n) return 1;
//     if (memo[i] > 0) return memo[i];
//     memo[i] = climb_Stairs(i + 1, n, memo) + climb_Stairs(i + 2, n, memo);
//     console.log(memo);
//     return memo[i];
//   }
//   let memo = [];
//   return climb_Stairs(0, n, memo);
// };

// var climbStairs = n => {
//   if(n === 1) return 1;
//   let dp = [];
//   dp[0] = 1;
//   dp[1] = 1;
//   for(let i = 2; i <= n; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2];
//   }
//   return dp[n];
// }

var climbStairs = function (n) {
  var climb_Stairs = function (n, memo) {
    console.log(memo);
    if(n in memo) return memo[n];
    if(n === 0) return 1;
    if(n < 0) return 0;
    memo[n] = climb_Stairs(n - 1, memo) + climb_Stairs(n - 2, memo);
    return memo[n];
  }
  let memo = {};
  return climb_Stairs(n, memo);
};

console.log(climbStairs(5))
