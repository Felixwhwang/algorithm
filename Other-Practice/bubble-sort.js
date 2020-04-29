const bublesort = array => {
  for(let i = 0; i < array.length - 1; i++) {
    for(let j = 0; j < array.length - i - 1; j++) {
      if(array[j] > array[j+1]) {
        [array[j], array[j+1]] = [array[j+1], array[j]];
      }
    }
  }
  return array;
}


let array = [29,3,43,6,5,4,19,1,32,12,3,55,12,99,32,12];
console.log(bublesort(array));
