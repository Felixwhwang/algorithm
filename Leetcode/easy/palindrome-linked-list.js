/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let node = head;
  let stack = [];
  let size = 0;
  while (node) {
    node = node.next;
    size++;
  }
  node = head;
  for (let i = 0; i < ~~(size / 2); i++) {
    stack.push(node.val);
    node = node.next;
  }
  if (size % 2 !== 0) {
    node = node.next;
  }
  for (let i = 0; i < ~~(size / 2); i++) {
    if (node.val !== stack.pop()) {
      return false;
    }
    node = node.next;
  }
  return true;
};

var isPalindrome = function (head) {
  const getListLen = head => {
    let len = 0;
    while(head) {
      head = head.next;
      len++;
    }
    return len;
  }
  let len = getLIstLen(head);
  let prev = null, cur = head;
  for(let i = 0; i < Math.floor(size/2); i++) {
    cur = cur.next;
  }
  //reverse the right half list
  while(cur) {
    let nextTemp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = nextTemp;
  }
  let headRightHalf = prev;
  while(headRightHalf && head) {
    if(headRightHalf.val !== head.val) {
      return false;
    }
    headRightHalf = headRightHalf.next;
    head = head.next;
  }
  return true;
}
