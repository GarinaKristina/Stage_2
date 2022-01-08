class Calculator { 

    add(a, b) {
    return a + b;
    }

    multiply(a, b) {
        return a * b;
    }
    validateParametr(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('You write not a number, you should change symbol');

        }
    }
}
module.exports = Calculator;