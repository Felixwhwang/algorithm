// Palindromic Dates
// The 2nd of February 2020 is a palindromic date in both dd / mm / yyyy and mm / dd / yyyy format(02 / 02 / 2020).Given a date in dd / mm / yyyy format, return true if the date is palindromic in both date formats.

//   Examples
// palindromicDate("02/02/2020") ➞ true

// palindromicDate("11/12/2019") ➞ false

// palindromicDate("11/02/2011") ➞ false
// // Although 11/02/2011 is palindromic in dd/mm/yyyy format,
// // it isn't in mm/dd/yyyy format (02/11/2011)
// Notes
// All dates will be valid in both date formats.

const palindromicDate = str => {
  let strArr = str.split('/');
  if(strArr[0] !== strArr[1]) {
    return false;
  }
  if(strArr[2].substring(2) !== strArr[2].substring(0, 2)){
    return false;
  }
  return true;
}
