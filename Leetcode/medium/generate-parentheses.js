/**
 * @param {number} n
 * @return {string[]}
 */
//n mean n open, when first "(" init, open will n - 1, close will + 1

var generateParenthesis = function (n) {
  let res = [];
  const perStage = (open, close, cur) => {
    if(cur.length === 2*n) {
      res.push(cur);
      return;
    }
    if(open > 0) {
      perStage(open - 1, close + 1, cur + '(');
    }
    if(close > 0) {
      perStage(open, close - 1, cur + ')');
    }
  }
  perStage(n, 0, '');
  return res;
};

console.log(generateParenthesis(2));
