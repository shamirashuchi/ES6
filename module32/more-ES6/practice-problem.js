// const odd = [1,3,5,7,9];
// const even = odd.map(x => x+1);
// console.log(even);

// const arr = [];
// for(let i = 0;i<odd.length;i++){
//     odd[i]=odd[i]+1;
//     arr.push(odd[i]);
// }
// console.log(arr);

// const array = [33,50,79,78,90,101,30];
// const divisible = array.filter(num => num % 10 == 0);
// console.log(divisible);


// const divisibleone = array.find(num => num % 10 == 0);
// console.log(divisibleone);

// const numbers = [1,7,17,22];
// const totaltwo = numbers.reduce((previous,current) => {
//     return previous + current;
// } ,0);
// console.log(totaltwo);

// let sum=0;
// for(let i=0;i<numbers[i];i++){
//     sum=sum+numbers[i];
// }
// console.log(sum);

const people = [
    {name: 'Meena', age:20},
    {name: 'Rina', age:15},
    {name:'suchorita', age:22}
];
// sum=0;
// for(let i=0;i<people.length;i++){
//     sum=sum+people[i].age;
// }
// console.log(sum);

for(let i=0;i<people.length;i++){
var totalthree = people.reduce((previous,current) => {
    current=people[i].age;
    console.log(previous,current);
    return previous + current;
} ,0);
//console.log(totalthree);
}
console.log(totalthree);

