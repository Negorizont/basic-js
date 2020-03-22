const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push("( " + value + " )");
    return this;
  },
  removeLink(position) {
    if(typeof(position) !== "number" ||
      parseInt(position) !== position ||
      position < 1 || position > this.getLength()){
        this.chain = [];
        throw new Error();
      } 
    this.chain.splice(position - 1,1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let resultChain = this.chain.join("~~");
    this.chain= [];
    return resultChain;
  }
};

module.exports = chainMaker;
