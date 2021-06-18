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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  if(!root) return [];
  let stack = [], res = [];
  stack.push(root);
  while(stack.length) {
    let node = stack[stack.length - 1];
    if(node.left) {
      stack.push(node.left);
      node.left = null;
    } else {
      res.push(stack.pop().val);
      if(node.right) {
        stack.push(node.right);
      }
    }
  }
  return res;
};
