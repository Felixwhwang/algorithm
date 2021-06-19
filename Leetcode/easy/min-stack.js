/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.arr = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.arr.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.arr.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.arr[this.arr.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.arr.reduce((beg, cur) => {
    return cur < beg ? cur : beg;
  });
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

/*****************************************************/

/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.arr = [];
  this.min = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.arr.push(val);
  if(!this.min.length) this.min.push(val);
  else this.min.push(Math.min(this.min[this.min.length - 1], val));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if(this.arr.length) {
    this.arr.pop();
    this.min.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if(this.arr.length) {
    return this.arr[this.arr.length - 1];
  }
  return null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  if(this.min.length) {
    return this.min[this.min.length - 1];
  }
  return null;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var obj = new MinStack();
console.log(obj);
