//1.create object using object literals syntax
//empty object const player = {};
//not empty object
const player = {};//object literal
//added property
player.name = 'Small Nirob';
player.speciality = 'batsman';
//added method
//function er nam dei nai tai anonymous function
player.bat = function(){
    console.log('swing your bat');
}
console.log(player);
player.bat();

const student = {name : 'pandey',
                 job: 'Khai andey',
                 ball : function(){
                    console.log('throw the ball')
                 },
                 salary: 100000
                }
//2.object construtor
const person = new Object();//new sarao kora jay
console.log(person);

//3. object create method
const item = Object.create(null);
console.log(item);

const atel = Object.create(student);
console.log(atel);
console.log(atel.name);
console.log(atel.friend);

// Es6 class
class Person{
    name = 'Abul';
    address = 'sodor ghat';
    constructor(age){
        this.age = age;
    }
}
//object banailam
const person1 = new Person(56);
console.log(person1);

//5.Constructor Function diye object banano
function Car(model1,price){
     this.model1 = model;
     this.price = price;
}
const tesla = new Car('elon' ,32);