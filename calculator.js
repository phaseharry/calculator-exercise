function Calculator() {
  this.currentVal = 0;
}

Calculator.prototype.add = function(num) {
  this.currentVal = this.currentVal + num;
};

Calculator.prototype.subtract = function(num) {
  this.currentVal = this.currentVal - num;
};

Calculator.prototype.multiply = function(num) {
  this.currentVal = this.currentVal * num;
};

Calculator.prototype.returnVal = function() {
  return this.currentVal;
};

module.exports = Calculator;
