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
 * @return {number}
 */
var maxDepth = function (root) {
  if(!root) return 0;
  let stack = [root];
  let max = 1;
  while(stack.length) {
    let node = stack[stack.length - 1];
    if(node.left) {
      stack.push(node.left);
      node.left = null;
    } else if(node.right){
      stack.push(node.right);
      node.right = null;
    } else {
      if(max < stack.length) max = stack.length;
      stack.pop();
    }
  }
  return max;
};

var maxDepth = function (root) {
  if(!root) return 0;
  let max = 1;

  const goDown = (node, depth) => {
    if(!node) return;
    if(!node.left && !node.right) {
      if(max < depth) max = depth;
    } else {
      goDown(node.left, depth + 1);
      goDown(node.right, depth + 1);
    }
  }

  goDown(root, 1);
  return max;
}
