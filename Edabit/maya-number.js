// Maya Number System
// Maya numeral system was vigesimal(base 20) and positional: units, tens, hundreds(and so on) were read as descendant progressive powers of 20, instead of 10 like we do with our decimal system.Some examples:

// - 39 => (1 x 20¹) + (19 x 20º)
// - 815 => (2 x 20²) + (0 x 20¹) + (15 x 20º)
// - 16125 => (2 x 20³) + (0 x 20²) + (6 x 20¹) + (5 x 20º)
// Every digit(as to say the number to be multiplied for the power of 20) was symbolized with a combination of pebbles(dots), woodsticks(lines) and shells(used for the number 0) following a base5 system.See the table below:

// Mayan Numbers

// You must implement a function that, given a non - negative integer, returns an array of strings, with each string representing the symbolized single digit.

// Symbols to use are "@" for shells, "—" for lines and "o" for dots.Dots have to be placed before the lines.

//   Examples
// // Be careful, spaces between symbols are placed only for better
// // readability! Don't use spaces in returned strings.

// mayaNumber(39) ➞["o", "o o o o — — —"]

// mayaNumber(815) ➞["o o", "@", "— — —"]

// mayaNumber(16125) ➞["o o", "@", "o —", "—"]
// Notes
// Check the Resources tab for more info on Maya numerals(and Maya arithmetic).
// All given integers are valid, no exceptions to handle.

const mayaNumber = num => {
  let numResult = null;
  if(num >= 20) {
    let remainder = num % 20;
    let current = Math.floor(num / 20);
    numResult = [remainder];
    while (current >= 20) {
      remainder = current % 20;
      current = Math.floor(current / 20);
      numResult.unshift(remainder);
    }
    numResult.unshift(current);
  } else {
    numResult = [num];
  }

  return numResult.map(cur => {
    let newEle = '';
    if(cur === 0) return '@';
    let remainder = cur % 5;
    let current = Math.floor(cur / 5);
    for(let index = 0; index < remainder; index++) {
      newEle += 'o';
    }
    for (let index = 0; index < current; index++) {
      newEle += '—';
    }
    return newEle;
  });
}

// function mayaNumber(n) {
//   const maya = {
//     0: "@", 1: "o", 2: "oo", 3: "ooo", 4: "oooo",
//     5: "—", 6: "o—", 7: "oo—", 8: "ooo—", 9: "oooo—",
//     a: "——", b: "o——", c: "oo——", d: "ooo——", e: "oooo——",
//     f: "———", g: "o———", h: "oo———", i: "ooo———", j: "oooo———"
//   };
//   return [...n.toString(20)].map(v => maya[v]);
// }

console.log(mayaNumber(1));
