const bottle = {color: 'ýeloow', price: 50, isCleaned: true, cpacity: 1};
const keys = Object.keys(bottle);
console.log(keys);
const values = Object.values(bottle);
console.log(values);
const pairs = Object.entries(bottle);
console.log(pairs);
//two dimentional array
const twodimention = [
    [ 'color', 'ýeloow' ],
    [ 'price', 50 ],
    [ 'isCleaned', true ],
    [ 'cpacity', 1 ]
  ];
  Object.seal(bottle);
delete bottle.isCleaned;
console.log(bottle);

bottle.price = 1000;
bottle.height = 12;
console.log(bottle);

Object.freeze(bottle);
delete bottle.isCleaned;
bottle.price = 2000;
bottle.height = 12;
console.log(bottle);