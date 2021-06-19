/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  try {
    let p1 = p2 = head;
    while(true) {
      p1 = p1.next;
      p2 = p2.next.next;
      if(p1 === p2) return true;
    }
  } catch(e) {
    return false;
  }
};

var hasCycle = function (head) {
  let hashmap = new Map();
  let cur = head;
  while(cur) {
    if(hashmap.get(cur)) {
      return true;
    } else {
      hashmap.set(cur, true);
      cur = cur.next;
    }
  }
  return false;
}
