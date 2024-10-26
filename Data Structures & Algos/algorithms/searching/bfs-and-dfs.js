'use strict';

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {

  insertWithRecursion(value) { 
    if (!value) return;

    const node = new Node(value);

    if (!this.root) this.root = node;
    else {
      const _traverse = node => {
        if (value < node.value) {
          if (!node.left) node.left = new Node(value);
          else _traverse(node.left);
        } else {
          if (!node.right) node.right = new Node(value);
          else _traverse(node.right);
        }
      }

      _traverse(this.root);
    }
  }

  lookupWithRecursion(value) {
    if (!value || !this.root) return null;

    let result = null;

    const _traverse = node => {
      if (value < node.value) _traverse(node.left);
      else if (value > node.value) _traverse(node.right);
      else result = node;
    }

    _traverse(this.root);
  
    return result;
  }

  // BFS with a loop (iterative).
  traverseBfs() {
    if (!this.root) return [];

    const bfsResult = [];
    const queue = [this.root];
    
    while (queue.length) {
      const node = queue.shift();

      bfsResult.push(node.value);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return bfsResult;
  }

  // BFS with recursion
  traverseBfsRecursively(queue = [this.root], list = []) {
    // The base case.
    if (!queue.length) return list;

    const node = queue.shift();
    list.push(node.value);

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);

    // The recursive case.
    return this.traverseBfsRecursively(queue, list);
  }

  // Depth-first Searches.
  inOrderDfs(node = this.root, list = []) {
    // Base case.
    if (node === null) return;

    // Recursive case: left.
    if (node.left) this.inOrderDfs(node.left, list);
    
    list.push(node.value);

    // Recursive case: right.
    if (node.right) this.inOrderDfs(node.right, list);
    
    return list;
  }

  preOrderDfs(node = this.root, list = []) {
    // Base case.
    if (node === null) return;

    list.push(node.value);

    // Recursive cases.
    if (node.left) this.preOrderDfs(node.left, list);
    if (node.right) this.preOrderDfs(node.right, list);

    return list;
  }

  postOrderDfs(node = this.root, list = []) {
    // Base case.
    if (node === null) return;

    // Recursive cases.
    if (node.left) this.postOrderDfs(node.left, list);
    if (node.right) this.postOrderDfs(node.right, list);

    list.push(node.value);
  
    return list;
  }
}

/* Task: Traverse the following node using breadth-first search and depth-first search.
        9
      /   \
    4      20
  /   \   /   \
1      6 15   170
*/

const tree1 = new BinarySearchTree();

tree1.insertWithRecursion(9);
tree1.insertWithRecursion(4);
tree1.insertWithRecursion(20);
tree1.insertWithRecursion(1);
tree1.insertWithRecursion(6);
tree1.insertWithRecursion(15)
tree1.insertWithRecursion(170);

console.log(tree1.traverseBfs());
console.log(tree1.traverseBfsRecursively());
console.log(tree1.inOrderDfs());
console.log(tree1.preOrderDfs());
console.log(tree1.postOrderDfs());
