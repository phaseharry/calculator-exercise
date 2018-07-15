function Calculator() {
  this.currentVal = 0;
}

Calculator.prototype.add = function() {
  this.currentVal = [...arguments].reduce(function(total, currentArg) {
    return total + currentArg;
  }, this.currentVal);
};

Calculator.prototype.subtract = function() {
  this.currentVal = [...arguments].reduce(function(total, currentArg) {
    return total - currentArg;
  }, this.currentVal);
};

Calculator.prototype.multiply = function() {
  this.currentVal = [...arguments].reduce(function(total, currentArg) {
    return total * currentArg;
  }, this.currentVal);
};

Calculator.prototype.returnVal = function() {
  return this.currentVal;
};

module.exports = Calculator;
