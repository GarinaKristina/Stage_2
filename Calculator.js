class Calc{
    constructor(num){
        this.num = num
    }

    add(a){
      this.num += a;
        return this
    }
 multiply(a){
      this.num *= a;
      return this;
 }
    
}

const calc = (input) => new Calc(input);
console.log(calc(0).add(2).add(2))