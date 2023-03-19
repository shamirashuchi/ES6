//primitive type are pass by value
let num1 = 5;
let num2 = 7;
function multiply(a,b){
    a=27;
    const result = a*b;
    return result;
}
console.log(num1);
multiply(num1,num2);
console.log(num1);

//passby reference
//non-primitive ba array and object are pass by reference
let student1 = {name: 'jalil', partner:'borsha'};
let student2 = {name: 'raj', partner: 'anika'};
function makemovie(couple1,couple2){
      couple1.name ='Ononto';
      couple2.partner = 'mim';
}
console.log(student1);
console.log(student2);
makemovie(student1,student2);
console.log(student1);
console.log(student2);