/**
 * Queues are first-in, first-out (FIFO) data structures used in software that allows users to make reservations, hail a cab, and send print orders to a shared printer.
 * Typical methods include enqueue(), dequeue(), and peek().
 * Lookup is O(n).
 * It's a bad idea to use an array to create a queue, because shift()--the equivalent of dequeue--is O(n). So, we implement queues with a linked list.
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
    this.min = [];
  }

  peek() { return this.first; }

  enqueue(value) {
    if (!value) return null;

    const node = new Node(value);

    if (!this.length) {
      this.first = this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    this.length++;

    if (this.min.length && this.min[this.min.length - 1] > value) this.min.push(value);
    
    return this;
  }

  dequeue() {
    if (this.length === 0) return null;

    const temp = this.first;

    if (this.first === this.last) {
      this.first = this.last = null;
    } else {
      this.first = this.first.next;
    }

    if (this.min.length && this.min[this.min.length - 1] === value) this.min.pop();

    this.length--;
    return temp;
  }

  isEmpty() { return this.length === 0; }
}

const myQueue = new Queue();

console.log('enqueue:', myQueue.enqueue(1));
console.log('enqueue:', myQueue.enqueue(2));
console.log('enqueue:', myQueue.enqueue(3));
console.log('enqueue:', myQueue.enqueue(4));

console.log('peek:', myQueue.peek());

console.log('dequeue:', myQueue.dequeue());

console.log('peek:', myQueue.peek());

console.log('isEmpty:', myQueue.isEmpty());

console.log('dequeue:', myQueue.dequeue());
console.log('dequeue:', myQueue.dequeue());

console.log({myQueue});

console.log('dequeue:', myQueue.dequeue());

console.log({myQueue});

console.log('dequeue:', myQueue.dequeue());

console.log('isEmpty:', myQueue.isEmpty());
