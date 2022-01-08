const { expect } = require('chai');
//const Calculator = require('/IT programm/app/Calculator.js');
//const Calculator = require('/IT programm/app/Calculator.js');
const Calculator = require('/IT programm/app/Calculator.js');

describe("Calculator method add", () => { 

    const calc = new Calculator;

    it('Should return the sum of two numbers', () => {
expect(calc.add(5, 8)).to.equal(13);
    });
//});

describe("Calculator method multiply", () => {

it('Should return the sign of multiplication of two numbers', () => {    
expect(calc.multiply(4, 4)).to.equal(16);
});
});

it("Should trow error if symbol is not a number", () => {
const addWithError =() => calc.add('cat', 4);
expect(addWithError).to.throw(Error);
});
});

//console.log(new Calculator().add(100, 200));