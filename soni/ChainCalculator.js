// How would you implement a calculator class with methods for addition,
// subtraction, and multiplication, supporting method chaining?
// calculator.add(3).multiply(4).subtract(5).getValue()
// steps: find requirements & given
// CLASS IS REQUIRED
// CLASS HAS METHODS
// CHAINING SUPPORT IS THERE
// steps: find requirements & given
// CLASS IS REQUIRED
var Calculator = /** @class */ (function () {
    function Calculator(initialValue) {
        if (initialValue === void 0) { initialValue = 0; }
        this.value = initialValue;
    }
    // CLASS HAS METHODS
    Calculator.prototype.add = function (amount) {
        this.value += amount;
        return this;
    };
    Calculator.prototype.multiply = function (factor) {
        this.value *= factor;
        return this;
    };
    Calculator.prototype.subtract = function (amount) {
        this.value -= amount;
        return this;
    };
    Calculator.prototype.getValue = function () {
        return this.value;
    };
    return Calculator;
}());
var calculator = new Calculator(2);
var add = calculator.add(5).getValue();
var subtract = calculator.subtract(2).getValue();
var multiply = calculator.multiply(8).getValue();
var value = calculator.getValue();
console.log("this is me", add, subtract, multiply, value);
