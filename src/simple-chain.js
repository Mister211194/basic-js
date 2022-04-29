const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chains: [],
  getLength() {
    return this.chains.length;
  },
  addLink(value) {
    if (!value) {
      this.chains.push(`( ${String(value)} )`)
    } else {
      this.chains.push(`( ${value.toString()} )`);
    }
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position < 1 || position > this.getLength()) {
      this.chains = []
      throw new Error("You can\'t remove incorrect link!");
    } else {
      this.chains.splice(position - 1, 1);
    }
    return this
  },
  reverseChain() {
    this.chains.reverse();
    return this;
  },
  finishChain() {
    const result = this.chains.join('~~');
    this.chains = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
