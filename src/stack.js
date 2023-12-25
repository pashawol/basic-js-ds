const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.resultArr = [];
  }
  push(element) {
    this.resultArr.push(element);
  }

  pop() {
    return this.resultArr.pop();
  }

  peek() {
    return this.resultArr[this.resultArr.length - 1]
  }
}
const stack = new Stack();
stack.push('dog')
stack.push('cat')
stack.push('duck')
console.log(stack);

module.exports = {
  Stack
};
