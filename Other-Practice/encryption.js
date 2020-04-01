// haveaniceday 12 characters

// 3^2 < 12 < 4^2
// row 3 column 4
// have
// anic
// eday

// hae and via ecy

// 1. receive a string, and get the length of the string (stringLength) n
// 2. getting the extraction of stringLength, receive row, and column. 2
// 3. let result[]
//   loop column numbers, and put them into result as init result[] extraction of n
//   result['h', 'a', 'v', 'e'];
// 4. loop rest of the string, set a variable 'key' = 0, n-column
//   for i = column, i < stringLength, i++
//     add each character into related position in result
//     key++
//     if key === 4, set key to 0.
// 5. get final encrpied result. O(n)

function encryption(s) {
  let str = s.split(' ').join('');
  let strLen = str.length;
  let row = Math.floor(Math.pow(strLen, 1/2));
  let column = Math.ceil(Math.pow(strLen,1/2));
  let key = 0;
  let result = [];
  while(key < column) {
    result.push(str[key]);
    key++;
  }
  key = 0;
  for(let i = column; i < strLen; i++) {
    result[key] += str[i];
    key++;
    if(key === column) {
      key = 0;
    }
  }
  return result.join(' ');
}

console.log(encryption('chill out'));
