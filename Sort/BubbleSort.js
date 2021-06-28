//example [2,1,3,6,12]
//outer loop will be length - 1 times, it's 3 times here
//inner loop will be length - 1 - outer init
//every time finish one traverse, ,we will got biggest number at last
const BubbleSort = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}



console.log(BubbleSort([2, 1, 3, 6, 12, 1, 4, 45, 12, 0, 39, 9]));
