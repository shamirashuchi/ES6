const add = (first,second) => first + second;
const getFullName = (first,last) => first + ' ' + last;
const multiply = (a,b) => a*b;
const result = multiply(7,8);
console.log(result);


const addAll = (a,b,c,d,e,f) => a+b+c+d+e+f;
//no parameter arrow function
const getpie = () => 3.14;

//one parameter
const doubleleft = (num) => num*2;

//one parameter simple version
const fivetimes = num => num*5;

//multiline arrow function
//if you want to return something , use the return
const domath = (x,y,z) => {
    const firstsum = x+y;
    const secondsum = y+z;
    const multiplyresult = firstsum + secondsum;
    const result = multiplyresult / 2;
    return result;
}