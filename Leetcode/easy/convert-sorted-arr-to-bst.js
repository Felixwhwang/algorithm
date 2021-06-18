/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  const toTree = (nums, low, high) => {
    if (low > high) return null;
    if (low === high) return new TreeNode(nums[low]);
    let mid = parseInt((low + high) / 2);
    let root = new TreeNode(nums[mid]);
    root.left = toTree(nums, low, mid - 1);
    root.right = toTree(nums, mid + 1, high);
    return root;
  }
  return toTree(nums, 0, nums.length - 1);
};
