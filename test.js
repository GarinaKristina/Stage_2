const chai = window.chai
const expect = chai.expect

describe("add", () => {
it('действие сложение 2+2=4', () => {
  //expect(Calc.add(2, 2)).assert.equal(4);
  assert.equal(Calc.add(2, 2),4);

});
});

describe("multiply", () => {
it('действие умножение 2*3=6', () => {

  assert.equal(Calc.multiply(2, 3), 6);
});
});
