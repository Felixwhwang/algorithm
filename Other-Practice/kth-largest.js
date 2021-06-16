const klarge = (arr, k) => {
  arr.sort((a, b) => a - b);
  return arr[arr.length - k];
}

console.log(klarge([7, 10, 4, 3, 20, 15], 4));
