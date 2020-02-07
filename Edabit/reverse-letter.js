// Reverse Coding Challenge #1
// This is a reverse coding challenge.Normally you're given explicit directions with how to create a function. Here, you must generate your own function to satisfy the relationship between the inputs and outputs.

// Your task is to create a function that, when fed the inputs below, produce the sample outputs shown.

//   Examples
// "A4B5C2" ➞ "AAAABBBBBCC"

// "C2F1E5" ➞ "CCFEEEEE"

// "T4S2V2" ➞ "TTTTSSVV"

// "A1B2C3D4" ➞ "ABBCCCDDDD"
// Notes
// If you get stuck, check the Comments for help.

const mysteryFunc = str => {
  let strArr = str.split('');
  let result = '';
  let currentLetter = null;
  for(let index = 0; index < strArr.length; index++) {
    if(!parseInt(strArr[index])) currentLetter = strArr[index];
    else {
      for(let j = 0; j < parseInt(strArr[index]); j++){
        result += currentLetter;
      }
    }
  }
  return result;
}

console.log(mysteryFunc('A2C3Z9'));
