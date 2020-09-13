const test = num => {
  let sum = 0;
  let i = 1;
  while(i <= num) {
    sum += 2 * i;
    i++;
  }
  let result = [sum, 11467 * num];
  return result;
}

console.log(test(100));
