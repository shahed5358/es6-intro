// brake up with var
let balance = 200;
balance = 300;
const userName = 'pori';
const weTogether = 'amr ' + userName;
console.log(weTogether);
// userName = 'moyna paki'

const numbers = [99, 23, 89, 50];
// numbers = [23, 34, 32, 4, 5];
numbers.push(555);
numbers[1] = 333;
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}

const student = { roll: 122, name: 'shahed', job: 'intern' };
student.name = 'Mofazzol';
// student = { name: 'mofazzol' }