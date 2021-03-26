// 20. Valid Parentheses

//stack way
var isValid = s => {
  let stack = [];
  for(let i = 0; i < s.length; i++) {
    if(stack[stack.length - 1] === '(' && s[i] === ')') {
      stack.pop();
    }
    else if (stack[stack.length - 1] === '[' && s[i] === ']') {
      stack.pop();
    }
    else if (stack[stack.length - 1] === '{' && s[i] === '}') {
      stack.pop();
    }
    else {
      stack.push(s[i]);
    }
  }
  return stack.length === 0;
}

console.log(isValid('(){()}[]'))
