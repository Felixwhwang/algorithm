// Examples
// removeSmallest([1, 2, 3, 4, 5]) ➞[2, 3, 4, 5]

// removeSmallest([5, 3, 2, 1, 4]) ➞[5, 3, 2, 4]

// removeSmallest([2, 2, 1, 2, 1]) ➞[2, 2, 2, 1]
// Notes
// Don't change the order of the left over items.
// If you get an empty array, return an empty array: []➞[].
// If there are multiple items with the same value, remove item with lower index(3rd example).

const removeSmallest = arr => {
  let smallestPosition = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < arr[smallestPosition]) {
      smallestPosition = i;
    }
  }
  arr.splice(smallestPosition, 1);
  return arr;
}

console.log(removeSmallest([2, 2, 1, 2, 1, 1, 3, 1, 4]));
