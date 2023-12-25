const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  list;
  current;

  getUnderlyingList() {
    return this.list;
  }

  enqueue(value) {
    if( this.list) {
      let newEl = new ListNode(value)
      this.current.next = newEl;
      this.current = newEl;
    }
    else{
      this.list  = new ListNode(value)
      this.current = this.list;
    }
  }
  
  dequeue() {
    let removed = this.list.value;
    this.list = this.list.next;
    return removed
  }
}

module.exports = {
  Queue
};
