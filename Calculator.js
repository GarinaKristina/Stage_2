class Calculator { 

    add(a, b) {
        this.validateParameter(a, b);
    return a + b;
    }
    

    multiply(a, b) {
        this.validateParameter(a, b);
    return a * b;
    }

    validateParameter(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('You write not a number, you should change symbol');

    }
    }
}
module.exports = Calculator;