const numbers = [12,5,23,45,11,18,9,55,61,1];
const bigNums = numbers.filter(number => number > 20);
console.log(bigNums);
const tiny = numbers.filter(n => n < 10);
console.log(tiny);
const even = numbers.filter(num => num % 2 == 0);
console.log(even);
const products = [
    {id: 1, name: 'laptop', price:45000},
    {id: 1, name: 'mobile', price:80000},
    {id: 1, name: 'watch', price:35000},
    {id: 1, name: 'tablet', price:23000},
];
const expensiveone = products.filter(product => product.price > 10000000);
console.log(expensiveone);

const expensivetwo = products.filter(product => product.price < 100);
console.log(expensivetwo);

const expensivethree = products.filter(product => product.price > 100);
console.log(expensivethree);