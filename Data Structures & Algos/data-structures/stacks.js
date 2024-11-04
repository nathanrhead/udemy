/**
 * Stacks are last-in, first-out (LIFO) data structures that are used in language-specific engines (think about the function stack in JavaScript), browser histories (back button), and the undo feature in word processors.
 * They typically have methods of pop(), push(), and peek(), or view the top-most item in the stack.
 * Lookup is O(n), because you have to traverse the stack linearly.
 */

// This implemtation of the stack data structure uses a linked list.
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class StackUsingList {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() { return this.top; }

  push(value) {
    if (!value) return null;

    const node = new Node(value);

    if (this.length === 0) { // The first value added to the stack.
      this.bottom = node;
      this.top = node;
    } else { // Not the first value added to the stack.
      const temp = this.top;
      
      this.top = node;
      this.top.next = temp;      
    }

    this.length++;

    return this;
  }

  pop() {
    if (this.length === 0) return null;
    
    const top = this.top;

    if (this.top === this.bottom) this.bottom = null;

    this.top = this.top.next;
    this.length--;


    return top.value;
    
  }

  isEmpty() { return this.length === 0; }

  getMin() {}
}

// const myStack = new StackUsingList();
// console.log(myStack.push(1));
// console.log(myStack.push(2));
// console.log(myStack.push(3));
// console.log(myStack.push(4));

// console.log({myStack});

// console.log('peek:', myStack.peek());
// console.log('pop:', myStack.pop());
// console.log({myStack});

// console.log('is empty:', myStack.isEmpty());

// console.log('pop:', myStack.pop());
// console.log('is empty:', myStack.isEmpty());
// console.log('pop:', myStack.pop());
// console.log('is empty:', myStack.isEmpty());
// console.log('pop:', myStack.pop());
// console.log('is empty:', myStack.isEmpty());

// console.log({myStack});

// This implemtation of the stack data structure uses an array.
class StackUsingArray {
  constructor() {
    this.stack = [];
  }

  peek() { return this.stack.length === 0 ? null : this.stack[this.stack.length - 1] }

  push(value) {
    if (!value) return null;

    this.stack.push(value);

    return this;
  }

  pop() {
    return this.stack.length === 0 ? null : this.stack.pop();
  }

  isEmpty() { return this.stack.length === 0 }

  getMin() {}
}

const myStack = new StackUsingArray();
console.log(myStack.push(1));
console.log(myStack.push(2));
console.log(myStack.push(3));
console.log(myStack.push(4));

console.log({myStack});

console.log('peek:', myStack.peek());
console.log('pop:', myStack.pop());
console.log({myStack});

console.log('is empty:', myStack.isEmpty());

console.log('pop:', myStack.pop());
console.log('is empty:', myStack.isEmpty());
console.log('pop:', myStack.pop());
console.log('is empty:', myStack.isEmpty());
console.log('pop:', myStack.pop());
console.log('is empty:', myStack.isEmpty());
console.log('peek:', myStack.peek());

console.log({myStack});
