// 21. Merge Two Sorted Lists
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let p1 = 0;
  let p2 = 0;
  let mergedArr = [];
  while(p1 < l1.length || p2 < l2.length) {
    if(p2 === l2.length) {
      mergedArr.push(l1[p1]);
      p1++;
    } else if (p1 === l1.length) {
      mergedArr.push(l2[p2]);
      p2++;
    } else if (l1[p1] <= l2[p2]) {
      mergedArr.push(l1[p1]);
      p1++;
    } else {
      mergedArr.push(l2[p2]);
      p2++;
    }
  }

  return mergedArr;
};

const mergeTwoLists = (l1, l2) => {
  if (!l1 || !l2) return l1 || l2;
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1;
  }
  else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2;
  }
}

const mergeTwoLists = (l1, l2) => {
  if (!l1 && !l2) return null;
  if (!l1) return l2;
  if (!l2) return l1;

  let mergedList = new ListNode();
  let result = mergedList;
  while (l1 || l2) {
    if (l1 && l2) {
      if (l1.val < l2.val) {
        mergedList.next = l1;
        l1 = l1.next;
      }
      else {
        mergedList.next = l2;
        l2 = l2.next
      }
    } else if (l1) {
      mergedList.next = l1;
      l1 = l1.next;
    } else {
      mergedList.next = l2;
      l2 = l2.next;
    }
    mergedList = mergedList.next;
  }
  return result.next;
}

console.log(mergeTwoLists([1,2,4], [1,2,3]));
