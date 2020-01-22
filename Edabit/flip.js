// String Flips
// Create a function that takes a string as the first argument, and a(string) specification as a second argument.If the specification is "word", return a string with each word reversed while maintaining their original order.If the specification is "sentence", reverse the order of the words in the string, while keeping the words intact.

//   Examples
// str = "There's never enough time to do all the nothing you want"


// flip("Hello", "word") ➞ "olleH"

// flip("Hello", "sentence") ➞ "Hello"

// flip(str, "word") ➞ "s'erehT reven hguone emit ot od lla eht gnihton uoy tnaw"

// flip(str, "sentence") ➞ "want you nothing the all do to time enough never There's"
// Notes
// N / A

const flip = (str, spec) => spec === "word" ? str.split(' ').map(cur => [...cur].reverse().join('')).join(' ') : str.split(' ').reverse().join(' ');
