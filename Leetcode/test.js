var myArr = ['foo', 'bar', 'baz'];
myArr.length = 0;
console.log(myArr);
myArr.push('bin');
console.log(myArr);

var txt = new Array('arr', 'kim', 'jim');
console.log(txt);

function fun_func(x_loc, y_loc) {
  x_loc = x_loc + 1;
  y_loc.myNum = y_loc.myNum + 1;
  console.log(x_loc);
  console.log(y_loc.myNum);
}
var x = 1, y = { 'myNum': 1};
fun_func(x, y);
console.log(Number("1") - 1 == 0);
