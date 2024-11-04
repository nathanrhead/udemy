// Queues can be implemented using stacks.
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.stackOne = [];
    this.stackTwo = [];
  }

  peek() {
    return this.isEmpty() ? null : !this.stackOne.length ? this.stackTwo[this.stackTwo.length - 1]: this.stackOne[0];
  }

  enqueue(value) {
    this.stackOne.push(value);
    return this;
  }

  dequeue() {
    if (this.isEmpty()) return null;

    if (!this.stackTwo.length) {
      const n = this.stackOne.length;

      for (let i = 0; i < n; i++) {
        this.stackTwo.push(this.stackOne.pop());
      }

      return this.stackTwo.pop();
    } else {
      const returnValue = this.stackTwo.pop(); 
      const n = this.stackTwo.length;

      for (let i = 0; i < n; i++) {
        this.stackOne.push(this.stackTwo.pop());
      }

      return returnValue;
    }
  }

  isEmpty() {
    if (!this.stackTwo.length) return this.stackOne.length === 0;
    else return this.stackTwo.length === 0;
  }
}

const queue = new Queue();

console.log(queue.enqueue(1));
console.log(queue.enqueue(2));
console.log(queue.enqueue(3));
console.log(queue.enqueue(4));

console.log('peek:', queue.peek());

console.log('dequeue:', queue.dequeue());

console.log('peek:', queue.peek());

console.log('dequeue:', queue.dequeue());

console.log('peek:', queue.peek());

console.log('is empty?:', queue.isEmpty());

console.log('dequeue:', queue.dequeue());

console.log('peek:', queue.peek());

console.log('is empty?:', queue.isEmpty());

console.log('dequeue:', queue.dequeue());

console.log('peek:', queue.peek());

console.log('is empty?:', queue.isEmpty());


