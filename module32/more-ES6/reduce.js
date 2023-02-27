const numbers = [1,2,3,4,5];
//.reduce(accumulatorfunction , initial value)
//accumulatorfunction use two parameters
const totalone = numbers.reduce((previous,current) => previous + current ,0);
console.log(totalone);

const totaltwo = numbers.reduce((previous,current) => {
    console.log(previous,current);
    return previous + current;
} ,0);
console.log(totaltwo);