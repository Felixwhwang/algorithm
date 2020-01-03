// You are given three piles of casino chips: white, green and black chips:

// the first pile contains only white chips
// the second pile contains only green chips
// the third pile contains only black chips
// Each day you take exactly two chips of different colors and head to the casino.You can chose any color, but you are not allowed to take two chips of the same color in a day.

// You will be given an array representing the number of chips of each color and your task is to return the maximum number of days you can pick the chips.Each day you need to take exactly two chips.

// solve([1, 1, 1]) = 1, because after you pick on day one, there will be only one chip left
// solve([1, 2, 1] = 2, you can pick twice; you pick two chips on day one then on day two
// solve([4, 1, 1]) = 2

// const solve = arr => {
//   let days = 0;
//   let decArr = arr.sort((a, b) => b - a);
//   while (decArr[0] !== 0 && decArr[1] !==0) {
//     decArr[0] -= 1;
//     decArr[1] -= 1;
//     decArr = decArr.sort((a, b) => b - a);
//     days++;
//   }
//   return days;
// }

const solve = arr => {
  let [a,b,c] = arr.sort((x,y)=>x-y);
  return (a+b, ~~((a+b+c)/2));
}

console.log(solve([12,12,12]));
