const { expect } = require('chai');
const Calculator = require('/IT programm/app/Calculator.js');

describe('Calculator method', () => {
  const calc = new Calculator();

  describe('Method add', () => {
    it('Should return the sum of two numbers', () => {
      expect(calc.add(5, 8)).to.equal(13);
    });

    it('Should trow error if symbol is not a number', () => {
      const addWithError = () => calc.add('cat', 4);
      expect(addWithError).to.throw(Error);
    });
  });

  describe('Method multiply', () => {
    it('Should return the value of multiplication of two numbers', () => {
      expect(calc.multiply(4, 4)).to.equal(16);
    });

    it('Should trow error if symbol is not a number', () => {
      const multiplyWithError = () => calc.multiply('dog', 4);
      expect(multiplyWithError).to.throw(Error);
    });
  });
});
