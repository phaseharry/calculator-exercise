const expect = require('chai').expect;
const Calculator = require(`../calculator`);

describe(`it's a calculator`, function() {
  it(`exist`, function() {
    expect(Calculator).to.be.ok;
  });
  it('can add and return a value', function() {
    const instanceCal = new Calculator();
    instanceCal.add(5);
    instanceCal.add(2);
    expect(instanceCal.returnVal()).to.equal(7);
    instanceCal.add(5);
    expect(instanceCal.returnVal()).to.equal(12);
  });
  it('can subtract a value', function() {
    const instanceCal = new Calculator();
    instanceCal.subtract(10);
    instanceCal.subtract(12);
    expect(instanceCal.returnVal()).to.equal(-22);
  });
  it(`can muliply a number`, function() {
    const instanceCal = new Calculator();
    instanceCal.currentVal = 1;
    instanceCal.multiply(6);
    instanceCal.multiply(3);
    expect(instanceCal.currentVal).to.equal(18);
  });
  it('can take multiple arguments', function() {
    const instanceCal = new Calculator();
    instanceCal.add(4, 2, 1, 6, 10);
    instanceCal.subtract(1, 3, 2);
    instanceCal.returnVal(17);
  });
  it(`can do all operations`, function() {
    const instanceCal = new Calculator();
    instanceCal.add(23, 232);
    instanceCal.subtract(5, 21, 51);
    instanceCal.multiply(2);
    expect(instanceCal.returnVal()).to.equal(356);
  });
});
