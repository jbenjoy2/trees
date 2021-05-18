/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;

    const findMin = node => {
      // case- both are null so only root exists
      if (node.left === null && node.right === null) return 1;
      // case- left child is null, right is not; return recursive solution of traveling down the right plus 1 for the root
      if (node.left === null) return findMin(node.right) + 1;
      // case- opposite of above
      if (node.right === null) return findMind(node.left) + 1;
      // case- neither are null so recursively find min of both and take the min of each, then add 1 for the root
      return Math.min(findMin(node.left), findMin(node.right)) + 1;
    };
    return findMin(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;

    const findMax = node => {
      // case- both are null so only root exists
      if (node.left === null && node.right === null) return 1;
      // case- left child is null, right is not; return recursive solution of traveling down the right plus 1 for the root
      if (node.left === null) return findMax(node.right) + 1;
      // case- opposite of above
      if (node.right === null) return findMax(node.left) + 1;
      // case- neither are null so recursively find min of both and take the min of each, then add 1 for the root
      return Math.max(findMax(node.left), findMax(node.right)) + 1;
    };
    return findMax(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let maxResult = 0;

    const findMaxSum = node => {
      if (node === null) return 0;

      const leftSide = findMaxSum(node.left);
      const rightSide = findMaxSum(node.right);

      maxResult = Math.max(maxResult, node.val + leftSide + rightSide);

      return Math.max(0, leftSide + node.val, rightSide + node.val);
    };

    findMaxSum(this.root);
    return maxResult;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    // bfs traversal of tree

    if (!this.root) return null;
    let queue = [this.root];
    let closest = null;

    while (queue.length) {
      let current = queue.shift();
      let isHigher = current.val > lowerBound;
      let reassignClosest = current.val < closest || closest === null;

      if (isHigher && reassignClosest) {
        closest = current.val;
      }
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return closest;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {}

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {}

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {}

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {}
}

module.exports = { BinaryTree, BinaryTreeNode };
