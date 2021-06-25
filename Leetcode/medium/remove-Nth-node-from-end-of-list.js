/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let length = 0;
  let hash = {};
  let node = head;
  while (node) {
    length++;
    hash[length] = node;
    node = node.next;
  }

  let nthFromBeg = length - n + 1;
  if (!hash[nthFromBeg - 1]) return hash[nthFromBeg].next;
  hash[nthFromBeg - 1].next = hash[nthFromBeg].next;

  return head;
};
