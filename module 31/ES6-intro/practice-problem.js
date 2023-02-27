const multiplyall = (a,b,c) => a*b*c;
console.log(multiplyall(2,3,4));

const hw = `I am a web devloper.
I love to code.
I love to eat biryani`;
console.log(hw);

const addall = (a,b=3) => a+b;
console.log(addall(2));

const friends = ['Abul','kabul','sabuli','Abdul','vabul'];
const even =  (arr) => {
    let evenfriend = [];
for(var x of arr){
    if(x.length%2==0){
        evenfriend.push(x);
    }
}
return evenfriend;
}
console.log(even(friends));

const numbers = [2,3,4,5,6,7,8,9,9,9];
const average = (arr) => {
    let sum=0;
for(var x of numbers){
    let p=Math.pow(x,2);
    sum=sum+p;
}
let avg = sum / arr.length;
return avg;
}
console.log(average(numbers));


const numberone = [1,2,3,4,5,6];
const numbertwo = [7,8,9,0];
const maximum = (arrone,arrtwo) =>{
    const arrthree = [...arrone,...arrtwo];
    const maxim = Math.max(...arrthree);
    return maxim;
}
console.log(maximum(numberone,numbertwo));