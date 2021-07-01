const insertion = arr => {
  for(let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while(j >= 0 && arr[j] > key) {
      arr[j+1] = arr[j--];
    }
    arr[j+1] = key;
  }
  return arr;
}


console.log(insertion([2,3,1,2,9,3,4,12,1]));
