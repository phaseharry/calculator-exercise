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
  it(`can muliply a number`, function() {});
});
