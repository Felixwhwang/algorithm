//it starts at index 1
//then compare to previous sorted part, and move next index
//example [4,1,3,2,7,8,9]
//start at 1, got [1,4....]
//at 3 got [1,3,4....]
//2 to compare each sorted value
//if 2 is smaller than current value, they will swap with each other [1,2,4...]
//use 3 to compare next one, until finish the loop
//until got last one
// const InsertionSort = arr => {
//   for(let i = 1; i < arr.length; i++) {
//     for(let j = 0; j < i; j++) {
//       if(arr[i] < arr[j]) {
//         let temp = arr[j];
//         arr[j] = arr[i];
//         arr[i] = temp;
//       }
//     }
//     console.log(arr);
//   }
//   return arr;
// }

const InsertionSort = arr => {
  for(let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while(j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

console.log(InsertionSort([9,8,7,6,5,4,3,2,1]));
