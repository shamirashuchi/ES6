const fish = {
    name: 'King Hilsha',
    address:'Chandpur',
    color:'silver',
    phone:'017176588899',
    price:4000
}
// const phone = fish.phone;
// const color = fish.color;
// const price = fish.price;

const{phone} = fish;

console.log(phone);

const {age,name} = {name:'Almas', age:56, profession: 'makeup artist'}
console.log(age);

const{address} = fish;
console.log(address);

const[first,another] = [44,99,88,456];
console.log(first,another);

const nayoks = ['sakib','bappi' , 'raj'];
const[king,lost,notun]=nayoks;
console.log(notun);

function getNames(){
    return ['Alim','Halim'];
}
const[baba,chacha] = getNames();
console.log(chacha,baba);