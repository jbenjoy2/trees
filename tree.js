/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0;

    let sum = this.root.val;

    // recursive solution
    const sumNodes = node => {
      for (let child of node.children) {
        sum += child.val;
        if (child.children.length) {
          sumNodes(child);
        }
      }
    };

    sumNodes(this.root);
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;

    let numEvens = this.root.val % 2 === 0 ? 1 : 0;

    const count = node => {
      for (let child of node.children) {
        if (child.val % 2 === 0) numEvens++;
        if (child.children.length) {
          count(child);
        }
      }
    };
    count(this.root);
    return numEvens;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;

    let greaterCount = this.root.val > lowerBound ? 1 : 0;

    const countGreater = node => {
      for (let child of node.children) {
        if (child.val > lowerBound) greaterCount++;
        if (child.children.length) {
          countGreater(child);
        }
      }
    };
    countGreater(this.root);
    return greaterCount;
  }
}

module.exports = { Tree, TreeNode };
