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
    this.mass = [];
    this.count = 0;
  }
  push(element) {
    this.mass[this.count] = element;
    this.count++;
  }

  pop() {  
    return this.mass.pop();
  }

  peek() {
   return this.mass[this.mass.length-1];
  }
}

module.exports = {
  Stack
};
