function alternatingCharacters(s) {
  let current = s[0];
  let result = 0;
  for (let i = 1; i < s.length; i++) {
    if (current !== s[i]) {
      current = s[i];
    } else {
      result++;
    }
  }
  return result;
}

console.log(alternatingCharacters('AABBAAA'));
