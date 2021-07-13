const klarge = (arr, k) => {
  for(let i = 0; i < k; i++) {
    for(let j = 0; j < arr.length - 1 - i; j++){
      if(arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
  }
  return arr[arr.length - k];
}

console.log(klarge([7, 10, 4, 3, 20, 15], 1));
