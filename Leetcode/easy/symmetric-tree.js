/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  const helper = (l,r) => {
    if(l === null && r === null) return true;
    if(l === null || r === null) return false;
    return l.val === r.val && helper(l.left, r.right) && helper(l.right, r.left);
  }
  return helper(root, root);
};

var isSymmetric = function (root) {
  if(!root) return true;
  let stack = [[root.left, root.right]];
  while(stack.length) {
    let [nl, nr] = stack.pop();
    if(!nl && !nr) continue;
    else if(nl && nr && nl.val === nr.val) {
      stack.push([nl.left, nr.right]);
      stack.push([nl.right, nr.left]);
    } else {
      return false;
    }
  }
  return true;
}
