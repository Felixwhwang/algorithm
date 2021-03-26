// 13. Roman to Integer
var romanToInt = s => {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  let romanArray = s.split('');
  let sum = 0;
  for(let i = 0; i < romanArray.length - 1; i++) {
    if(map[romanArray[i]] >= map[romanArray[i + 1]]) {
      sum += map[romanArray[i]];
    }
    else {
      sum -= map[romanArray[i]];
    }
  }
  return sum + map[romanArray[romanArray.length - 1]];
}


console.log(romanToInt('IX'));
