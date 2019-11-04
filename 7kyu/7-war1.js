// 05 04 03
// 06 01 02
// 07 08 09

// 17 16 15 14 13
// 18 05 04 03 12
// 19 06 01 02 11
// 20 07 08 09 10
// 21 22 23 24 25

// layers(1) === 1
// layers(5) === 2
// layers(25) === 3
// layers(30) === 4
// layers(50) === 5

// Your task is to create a function that given a number n simply returns the number of layers required to store up to n
//   (included).


function layers(n) {
  var squareRoot = Math.sqrt(n);
  if (squareRoot !== Math.floor(Math.sqrt(n))) {
    squareRoot = Math.floor(squareRoot);
    squareRoot = squareRoot % 2 ? squareRoot + 2 : squareRoot + 1;
  } else if (squareRoot % 2 === 0) {
    squareRoot++;
  }

  console.log(squareRoot);
  var layer = 0;
  while (squareRoot > 0) {
    squareRoot -= 2;
    layer++;
  }
  return layer;
}
//return Math.ceil((Math.sqrt(n)+1)/2);
layers(4);
