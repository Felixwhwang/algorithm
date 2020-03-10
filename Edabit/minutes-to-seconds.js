// Video Length in Seconds
// You are given the length of a video in minutes.The format is mm: ss(e.g.: "02:54").Create a function that takes the video length and return it in seconds.

// Examples
// minutesToSeconds("01:00") ➞ 60

// minutesToSeconds("13:56") ➞ 836

// minutesToSeconds("10:60") ➞ false
// Notes
// The video length is given as a string.
// If the number of seconds is 60 or over, return false(see example #3).
// You may get a number of minutes over 99(e.g. "121:49" is perfectly valid).

const minutesToSeconds = time => {
  let [minutes, seconds] = time.split(':').map(Number);
  return seconds > 59 ? false : minutes * 60 + seconds;
  // let minutes = parseInt(time.split(':')[0]);
  // let seconds = parseInt(time.split(':')[1]);
  // if(seconds > 59) {
  //   return false;
  // } else {
  //   return minutes * 60 + seconds;
  // }
}


console.log(minutesToSeconds("13:56"));
