// Evaluate Polynomials from String
// You will be given a polynomial expression in string form.The expression will contain any of the following operations, written using standard mathematical notation for a single variable, "x", as illustrated in the examples below:

// addition: x + 1
// subtraction: x – 2
// multiplication: 3x
// division: x / 4
// exponentation: x ^ 5
// brackets: x(x + 1)
// Your task is to write a function that can evaluate such a polynomial for a given value of x.You will receive two arguments: the polynomial string and the input number.

// If the mathematical expression contains an error, you should return "invalid".

//   Examples
// evalPolynomial("x+1", 5) ➞ 6

// evalPolynomial("5x^2", 3) ➞ 45

// evalPolynomial("(x(x+1))/2", 4) ➞ 10

// evalPolynomial("4(x + 3))/2", 5) ➞ "invalid"
// // Invalid because parentheses not balanced.
// Notes
// The string will not contain spaces.

const evalPolynomial = (poly, num) => {
  if (poly === '') return 'invalid';
  let polyArr = getNewPolyArr(poly, num);
  let checkArr = [...polyArr].filter(cur => (cur === '+' || cur === '-' || cur === '(' || cur === ')' || cur === '/'
    || cur === '^' || Number.isInteger(parseInt(cur))));
  if (polyArr.length !== checkArr.length) {
    return 'invalid';
  }

  while (true) {
    let openIndex = null;
    let closeIndex = null;
    for (let index = polyArr.length - 1; index >= 0; index--) {
      if (polyArr[index] === '(') {
        openIndex = index;
        break;
      }
    }

    for (let index = openIndex; index < polyArr.length; index++) {
      if (polyArr[index] === ')') {
        closeIndex = index;
        break;
      }
    }
    if (openIndex !== null && closeIndex !== null) {
      let subPolyArr = [...polyArr].splice(openIndex + 1, closeIndex - openIndex - 1);
      if (calAll(subPolyArr) === 'invalid') {
        return 'invalid';
      }
      polyArr.splice(openIndex, closeIndex - openIndex + 1, calAll(subPolyArr)[0]);
    } else if (openIndex === null & closeIndex === null) {
      if (calAll(polyArr) === 'invalid') {
        return 'invalid';
      }
      return parseInt(calAll(polyArr)[0]);
    } else {
      return 'invalid';
    }
  }


  return 'end';
}

const calAll = poly => {
  const result = plusMinus(timesDivid(calPower(poly)));
  return result !== 'invalid' ? result : 'invalid';
}

const getNewPolyArr = (poly, num) => {
  let newPolyArr = [];
  let oldPolyArr = poly.split('');
  const numbers = '0123456789';
  let tempNum = '';
  for (let index = 0; index < oldPolyArr.length; index++) {
    if (numbers.indexOf(oldPolyArr[index]) === -1) {
      if (tempNum !== '') {
        newPolyArr.push(tempNum);
        tempNum = '';
      }
      newPolyArr.push(oldPolyArr[index]);
    } else {
      tempNum += oldPolyArr[index];
    }
  }
  if (tempNum !== '') newPolyArr.push(tempNum);

  return newPolyArr.map(cur => {
    if (cur === 'x') {
      return num + '';
    }
    return cur;
  });
}

const calPower = polyArr => {
  let powerIndex = polyArr.indexOf('^');
  while (powerIndex !== -1) {
    let leftNum = parseInt(polyArr[powerIndex - 1]);
    let rightNum = parseInt(polyArr[powerIndex + 1]);
    if (Number.isInteger(leftNum) && Number.isInteger(rightNum)) {
      polyArr.splice(powerIndex - 1, 3, leftNum ** rightNum + '');
    } else {
      return 'invalid';
    }
    powerIndex = polyArr.indexOf('^');
  }
  return polyArr;
}

const timesDivid = polyArr => {
  debugger;
  if (polyArr === 'invalid') return 'invalid';
  let dividIndex = polyArr.indexOf('/');
  while (dividIndex !== -1) {
    let leftNum = parseInt(polyArr[dividIndex - 1]);
    let rightNum = parseInt(polyArr[dividIndex + 1]);
    if (Number.isInteger(leftNum) && Number.isInteger(rightNum)) {
      polyArr.splice(dividIndex - 1, 3, leftNum / rightNum + '');
    } else {
      return 'invalid';
    }
    dividIndex = polyArr.indexOf('/');
  }

  let tempNum = '';
  for (let index = 0; index < polyArr.length; index++) {
    if (Number.isInteger(parseInt(polyArr[index]))) {
      if (tempNum !== '') {
        tempNum = parseInt(tempNum) * parseInt(polyArr[index]) + '';
        polyArr.splice(index - 1, 2, tempNum);
        index--;
      } else {
        tempNum += polyArr[index];
      }
    } else if (polyArr[index] === '+' || polyArr[index] === '-') {
      tempNum = '';
    } else {
      return 'invalid';
    }
  }
  return polyArr;
}

const plusMinus = polyArr => {
  if (polyArr === 'invalid') return 'invalid';
  while (polyArr[1] !== undefined) {
    let leftNum = parseInt(polyArr[0]);
    let rightNum = parseInt(polyArr[2]);
    let operator = polyArr[1];
    if (Number.isInteger(leftNum) && Number.isInteger(rightNum)) {
      if (operator === '+') {
        polyArr.splice(0, 3, leftNum + rightNum + '');
      } else if (operator === '-') {
        polyArr.splice(0, 3, leftNum - rightNum + '');
      } else {
        return 'invalid';
      }
    } else {
      return 'invalid';
    }
  }
  return polyArr;
}
// console.log( evalPolynomial( '(x+(x^3-22)/(2-x+3))+33x' , 2) );
console.log(evalPolynomial("x//2", 3) );
