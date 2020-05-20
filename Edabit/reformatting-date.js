// Reformatting the Date
// Create a function that converts dates from one of five string formats:

// "January 9, 2019"(MM D, YYYY)
// "Jan 9, 2019"(MM D, YYYY)
// "01/09/2019"(MM / DD / YYYY)
// "01-09-2019"(MM - DD - YYYY)
// "01.09.2019"(MM.DD.YYYY)
// The return value will be an array formatted like: [MM, DD, YYYY], where MM, DD, and YYYY are all integers.Using the examples above:

// Examples
// convertDate("January 9, 2019") ➞[1, 9, 2019]

// convertDate("Jan 9, 2019") ➞[1, 9, 2019]

// convertDate("01/09/2019") ➞[1, 9, 2019]

// convertDate("01-09-2019") ➞[1, 9, 2019]

// convertDate("01.09.2019") ➞[1, 9, 2019]
// Notes
// You can solve this any number of ways, but using JavaScript's new Date() method is probably the easiest. Check the Resources tab for documentation.

const convertDate = date => {
  const day = new Date(date);
  return [day.getMonth() + 1, day.getDate(), day.getFullYear()];
}

console.log(convertDate("02/09/2019"));
console.log(convertDate("01/09/2021"));
