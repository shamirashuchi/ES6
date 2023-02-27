const numbers = [12,56,87,44];
const half = numbers.map(n => n/2);
console.log(half);

const third = numbers.map(n => n/3);
console.log(third);

const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];
const firstletters = friends.map(friend => friend[0]);
console.log(firstletters);

const friendlength = friends.map(friend => friend.length);
console.log(friendlength);

const products = [
    {id: 1, name: 'laptop', price:45000},
    {id: 1, name: 'mobile', price:80000},
    {id: 1, name: 'watch', price:35000},
    {id: 1, name: 'tablet', price:23000},
];
const item = products.map(product => console.log(product));
//console.log(items) undefined asbe karon console.log konokisu return kore na

const items = products.map(product => product.name);
console.log(items);

const prices = products.map(product => product.price);
console.log(prices);