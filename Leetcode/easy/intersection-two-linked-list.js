/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
//A + B with B + A way to get the intersection node
var getIntersectionNode = function (headA, headB) {
  let a = headA, b = headB;
  while(a !== b) {
    a = a ? a.next : headB;
    b = b ? b.next : headA;
  }
  return a;
};

var getIntersectionNode = function (headA, headB) {
  let hashset = new Set();
  let a = headA, b = headB;
  while(a) {
    hashset.add(a);
    a = a.next;
  }

  while(b) {
    if(hashset.has(b)) {
      return b;
    } else {
      b = b.next;
    }
  }
  return null;
}

var getIntersectionNode = function (headA, headB) {
  let hashmap = new Map();
  let a = headA, b = headB;
  while (a) {
    hashmap.set(a, true);
    a = a.next;
  }

  while (b) {
    if (hashmap.get(b)) {
      return b;
    } else {
      b = b.next;
    }
  }
  return null;
}
