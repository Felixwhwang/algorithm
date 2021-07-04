const test = str => {
  if(!str.length) return '';
  if(str.length === 1) return str[0];
}

console.log(test(["flower", "flow", "flight"]));
