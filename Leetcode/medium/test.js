const reverse = arr => {
  return arr.reduce((ini, cur) => {
    console.log(ini);
    return cur.reverse();
  });
}

console.log(reverse(
  [[5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16]]
));
