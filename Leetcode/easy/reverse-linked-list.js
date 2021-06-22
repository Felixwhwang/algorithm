/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if(!head) return [];
  let prev = null;
  let cur = head;
  while(cur) {
    let nextTemp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = nextTemp;
  }
  return prev;
};
