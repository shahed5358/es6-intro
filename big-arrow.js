const add = (num1, num2) => num1 + num2;
const sum = add(4, 5);

const multiply = (num1, num2, num3) => num1 * num2 * num3;
const result = multiply(2, 3, 4);

const tenTimes = (num) => num * 10;
const output = tenTimes(17);

const fiveTimes = num => num * 5;
const value = fiveTimes(20);

const getName = () => 'shahedul Islam';
const name = getName();
console.log(sum, result, output, value, name);

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    const output = result * 5;
    return output;
}
const totalMath = doMath(12, 5);
console.log(totalMath);

// document.getElementById('my-btn').addEventListener(event => {

// })