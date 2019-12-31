// "abc#d##c" ==> "ac"
// "abc##d######" ==> ""
// "#######" ==> ""
// "" ==> ""

const cleanString = s => {
  let result = [];
  for(let index = 0; index < s.length; index++) {
    if(result !== [] && s[index] === '#') {
      result.pop();
    }
    if(s[index] !== '#') {
      result.push(s[index]);
    }
  }
  return result.join('');
}

console.log(cleanString('abc#d##c'));
