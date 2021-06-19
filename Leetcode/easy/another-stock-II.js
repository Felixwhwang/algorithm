/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let buy = prices[0];
  let maxprofit = 0;
  for(let i = 1; i < prices.length; i++) {
    if(buy > prices[i]) {
      buy = prices[i];
    } else if(prices[i] > buy) {
      maxprofit += prices[i] - buy;
      buy = prices[i];
    }
  }
  return maxprofit;
};

var maxProfit = function (prices) {
  let maxprofit = 0;
  for(let i = 1; i < prices.length; i++) {
    if(prices[i] > prices[i-1]) {
      maxprofit += prices[i] - prices[i-1];
    }
  }
  return maxprofit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
