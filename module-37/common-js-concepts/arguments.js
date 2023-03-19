function sum(a,b,c){
    console.log(arguments);//array like object pabo
    console.log(arguments[4]);
    console.log(typeof arguments);
    //arguments.push(45) kora jabe na karon array na
    //for of kora jabe but filter,map kora jabe na
    //object to array
    const args = [...arguments];
    console.log(args);
    const result = a+b+c;
    return result;
}
const total = sum(45,89,12,45,98,56);
console.log(total);
console.log(typeof sum);
console.log(sum.length);