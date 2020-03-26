let a = [3,5,7,6,1,2,9,4,8,4,4,34,34,43,43,24,24,234,24,342,4,2];
// let a = [35,33,42,10,23,5,65,36];
// let a = [2,3];

const partition = (a, low, high) => {
  let pivot = a[Math.floor((low + high) / 2)];
  while(low <= high) {
    while(a[low] < pivot) {
      low++;
    }
    while(a[high] > pivot) {
      high--;
    }
    if(low <= high) {
      [a[low], a[high]] = [a[high], a[low]];
      low++;
      high--;
    }
  }
  return low;
}

const quicksort = (array, low, high) => {
  let index;
  if(array.length > 1) {
    index = partition(array, low, high);
    if(low < index - 1) {
      quicksort(array, low, index - 1);
    }
    if(high > index) {
      quicksort(array, index, high);
    }
  }
  return array;
}

console.log( quicksort(a, 0, a.length - 1) );
