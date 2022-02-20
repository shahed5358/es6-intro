function add(num1, num2 = 0) {
    // option 1
    // num2 = num2 || 0;
    // option 2
    // if (num2 == undefined) {
    //     num2 = 0;
    // }
    const total = num1 + num2;
    return total;
}
const result = add(12, 0);
console.log(result);


function fullName(first, last = 'chowdory') {
    const name = first + ' ' + last;
    return name;
}
const person = fullName('shahedul', "Islam");
console.log(person);