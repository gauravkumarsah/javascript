// COMMAND TO CONVER TS INTO JS FILE
// tsc ChainCalculator.ts 



// How would you implement a calculator class with methods for addition,
// subtraction, and multiplication, supporting method chaining?
// calculator.add(3).multiply(4).subtract(5).getValue()

// steps: find requirements & given
// CLASS IS REQUIRED
// CLASS HAS METHODS
// CHAINING SUPPORT IS THERE

// steps: find requirements & given
// CLASS IS REQUIRED
class Calculator {
  private value: number;
  constructor(initialValue = 0) {
    this.value = initialValue;
  }

  // CLASS HAS METHODS
  add(amount: number) {
    this.value += amount;
    return this;
  }
  multiply(factor: number) {
    this.value *= factor;
    return this;
  }
  subtract(amount: number) {
    this.value -= amount;
    return this;
  }
  getValue() {
    return this.value;
  }
  // CHAINING SUPPORT IS THERE
}

const calculator = new Calculator(2);

const add = calculator.add(5).getValue();
const subtract = calculator.subtract(2).getValue();
const multiply = calculator.multiply(8).getValue();
const value = calculator.getValue();

console.log("this is me", add, subtract, multiply, value);
