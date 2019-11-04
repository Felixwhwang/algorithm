// treat each character as a number
// a = 1
// b = 2
// addLetters(a, b) = 3 which is c
// ex:
// addLetters('a', 'b', 'c') = 'f'
// addLetters('a', 'b') = 'c'
// addLetters('z') = 'z'
// addLetters('z', 'a') = 'a'
// addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
// addLetters() = 'z

function addLetters(...letters) {
  if (letters.length === 0) return 'z';
  var letterStr = letters.join('');
  var currentLetterNumber = null;
  var sum = 0;
  for (var index = 0; index < letterStr.length; index++) {
    currentLetterNumber = letterStr.charCodeAt(index) - 96;
    sum += currentLetterNumber;
  }
  if (sum % 26 === 0) return 'z';
  else resultNumber = sum % 26;

  return String.fromCharCode(resultNumber + 96);
}
//return String.fromCharCode((letters.reduce( (a,b) => a+b.charCodeAt(0)-96, 0)+25)%26+97);
console.log( addLetters('z', 'a', 'e') );
