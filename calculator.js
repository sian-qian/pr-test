/**
 * Input: 
actions = ["Calculator", "add", "subtract", "getResult"], 
values = [10, 5, 7]
Output: 8
Explanation: 
new Calculator(10).add(5).subtract(7).getResult() // 10 + 5 - 7 = 8
 */

class Calculator {
  value = 0;

  constructor(value) {
    this.value = value;
  }
  add(addV) {
    this.value += addV;
    return this;
  }
  subtract(subtractV) {
    this.value -= subtractV;
    return this;
  }
  multiply(multiplyV) {
    this.value *= multiplyV;
    return this;
  }
  divide(divideV) {
    this.value /= divideV;
    return this;
  }
  power(powerV) {
    this.value = Math.pow(this.value, powerV);
    return this;
  }
  getResult() {
    return this.value;
  }
}

console.log(new Calculator(10).add(5).subtract(7).getResult());
