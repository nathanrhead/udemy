'use strict';

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {

  // Uses recursion.
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

  // Uses a while loop.
  insertWithoutRecursion(value) {
    if (!value) return;

    const node = new Node(value);

    if (!this.root) this.root = node;
    else {
      let current = this.root;

      while (current) {        
        if (value < current.value) { // Go left.
          if (!current.left) {
            current.left = node;
            return this;
          } else {
            current = current.left;
          }
        } else {
          if (!current.right) {
            current.right = node;
            return this;
          } else {
            current = current.right;
          }
        }
      }
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

  lookupWithoutRecursion(value) {
    if (!value || !this.root) return null;

    let current = this.root;

    while (current) {
      if (value < current.value) current = current.left;
      else if (value > current.value) current = current.right;
      else return current;
    }

    return null;
  }

  // This method uses a while loop, though there is a recursive method that is sleeker and does not require tracking the parent node.
  remove(value) {
    if (!this.root) return false;

    let currentNode = this.root;
    let parentNode = null;

    while (currentNode) {
      // Traverse the tree in search of the node to remove.
      if (value < currentNode.value) { // Go left.
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) { // Go right.
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) { // Node's value matches the value to remove.
        if (!currentNode.right) { // Option 1: The current node doesn't have a righthand child.
          if (!parentNode) this.root = currentNode.left; // The node to remove is the root.
          else {
            // If the current node is a lefthand child, make current's lefthand child a child of the parent.
            if (currentNode.value < parentNode.value) parentNode.left = currentNode.left; // Including if currentNode.left = null.

            // If the current node is a righthand child, make the the current's lefthand child a righthand child of the parent.
            else if (currentNode.value > parentNode.value) parentNode.right = currentNode.left; // Including if currentNode.left = null.
          } 
        } else if (!currentNode.right.left) { // Option 2: The current's righthand child doesn't have a lefthand child.
          currentNode.right.left = currentNode.left; // Move the current node's lefthand child down to be a child of its righthand child.

          if (!parentNode) this.root = currentNode.right; // The node to remove is the root.
          else {
            // If the current node is a lefthand child, make the current's righthand child a lefthand child of the parent.
            if (currentNode.value < parentNode.value) parentNode.left = currentNode.right;

            // If the current node is a righthand child, make the current's righthand child a righthand child of the parent.
            else if (currentNode.value > parentNode.value) parentNode.right = currentNode.right;
          }
        } else { // Option 3: The righthand child has a lefthand child.
          // Find the current's righthand child's left-most child.
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;

          // Iterate to the smallest child of the current's righthand child.
          while (!leftmost.left) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          // Make the parent's left subtree the leftmost's right subtree.
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left; // Replace the node to be removed with its righthand's leftmost (smallest) node, tacking on the lefthand line.
          leftmost.right = currentNode.right; // Tack the current node's righthand line onto the leftmost node.

          if (!parentNode) this.root = leftmost; // The node to remove is the root.
          else {
            // Tack the leftmost (and its children) onto the parent based on its relative size to the parent.
            if (currentNode.value < parentNode.value) parentNode.left = leftmost;
            else parentNode.right = leftmost;
          }
        }

        return true;
      }
    }
  }
}

/* Task: Create the following node.
        9
      /   \
    4      20
  /   \   /   \
1      6 15   170
*/

const tree1 = new BinarySearchTree();
const tree2 = new BinarySearchTree();

tree1.insertWithoutRecursion(9);
tree1.insertWithoutRecursion(4);
tree1.insertWithoutRecursion(20);
tree1.insertWithoutRecursion(1);
tree1.insertWithoutRecursion(6);
tree1.insertWithoutRecursion(15)
tree1.insertWithoutRecursion(170);

tree2.insertWithRecursion(9);
tree2.insertWithRecursion(4);
tree2.insertWithRecursion(20);
tree2.insertWithRecursion(1);
tree2.insertWithRecursion(6);
tree2.insertWithRecursion(15)
tree2.insertWithRecursion(170);

// console.log(JSON.stringify(traverse(tree1.root)));
// console.log('----------------------------------\n\n');
// console.log(JSON.stringify(traverse(tree2.root)));

// console.log('Lookup 20:', tree1.lookupWithoutRecursion(20));
// console.log('Lookup 15:', tree2.lookupWithoutRecursion(15));

// console.log('Remove 1:', traverse(tree1.remove(1)));
console.log('Remove 4:', tree1.remove(4));
console.log(traverse(tree1.root));

function traverse(node) {
  const tree = { value: node.value };

  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);

  return tree;
}