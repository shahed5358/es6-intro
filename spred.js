const numbers = [23, 34, 54, 64, 76];
// console.log(numbers); 
// console.log(...numbers);

const max = Math.max(23, 99, 65);
const maxInArray = Math.max(...numbers);
// console.log(max, maxInArray);


const numbers2 = [22, ...numbers, 88];
numbers.push(55);
console.log(numbers);
console.log(numbers2);