const numbers = [2,4,8,6,3];
const output = [];
for(const number of numbers){
    const double = number * 2;
    output.push(double);
}
console.log(output);

function getdoubles(numbers){
    const output = [];
for(const number of numbers){
    const double = doubleit(number);
    output.push(double);
}
return output;
}
function doubleoldit(num){
    return num * 2;
 }
 
const doubleit = num => num * 2;

const makedouble = numbers.map(doubleit);
console.log(makedouble);

const makedoubledirect = numbers.map(num => num * 2);
console.log(makedoubledirect);

const makedoubledirecttwo = numbers.map(x => x * 2);
console.log(makedoubledirecttwo);

const fivetimes = [1,2,3,4,5].map(x => x*5);
console.log(fivetimes);

console.log(getdoubles(numbers));