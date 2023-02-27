let money = 25;
money = 35;
console.log(money);

const bird = 'Jaan Pakhi';
//bird = 'Moyna pakhi';
const message = bird + ' potas potas';
console.log(message);

const numbers = [12,89,65,45];
//reassign is not allowed
//numbers = [77,66,22,99];
numbers.push(123);
numbers[1] = 90;
console.log(numbers);

const student = {
    name: 'mofiz',
    address: 'Rangpur'
}
//student = {
    //name: 'Mofazzol'
//}
student.name = 'Mofazzol';

let sum = 0;
for(let i = 0; i<numbers.length; i++){
    //const number = numbers[i];
    //var hoisting kore mane variable upore niye jay tai error ase na
    var number = numbers[i];
    console.log(number);
    sum = sum + number;
}
//error asbe karon let and const are block scope.block er baire variable jabe na.
console.log(number);