'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value),
    this.tail = this.head,
    this.length = 1;
  };

  append(value) {
    const node = new Node(value);

    this.tail.next = node;
    this.tail = node;
    this.length++;

    return this;
  };

  prepend(value) {
    const node = new Node(value);

    node.next = this.head;
    this.head = node;
    this.length++;

    return this;
  };

  insert(index, value) {
    // Check inputs.
    if (!index || typeof index !== 'number') return 'Either no index was passed or the index is not a number.';

    // If the index exceeds the length of the list, append the value.
    if (index >= this.length) return this.append(value);
    else if (index === 0) return this.prepend(value);

    const node = new Node(value);
    const previous = this.traverseToIndex(index - 1);
    const temp = previous.next;
    previous.next = node;
    node.next = temp;
    this.length++;

    return this;
  };

  remove(index) {
    // Check input.
    if (!index || typeof index !== 'number') return 'Either no index was passed or the index is not a number.';
    if (index > this.length - 1) return 'This list does not contain the index.';

    const previous = this.traverseToIndex(index - 1);
    const nodeToRemove = previous.next;
    
    previous.next = nodeToRemove.next;
    this.length--;

    return this;
  };

  traverseToIndex(index) {
    if (!index || typeof index !== 'number') return 'Either no index was passed or the index is not a number.';

    let current = this.head;
    let previous = null;
    let counter = 0;

    while (index !== counter) {
      previous = current;
      current = current.next;
      counter++
    }

    return current;
  };

  printList() {
    const array = [];
    let current = this.head;

    while (current) {
      array.push(current.value);
      current = current.next;
    }

    return array;
  };
};

const list = new LinkedList(10);
list.append(5);
list.prepend(4);
list.insert(2, 6);
list.insert(0, 17);
console.log(list.printList());
list.remove(2);
console.log(list.printList());
