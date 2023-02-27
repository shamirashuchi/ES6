function addone(first,second){
    if(second === undefined){
        second = 0;
    }
    const total = first + second;
    return total;
}
const resultone = addone(10);
console.log(resultone);

function addseven(first,second){
    if(second === undefined){
        second = 0;
    }
    const total = first + second;
    return total;
}
const resultseven = addseven(10,20);
console.log(resultseven);

function addtwo(first,second){
    second = second || 0;
    const total = first + second;
    return total;
}
const resulttwo = addtwo(10);
console.log(resulttwo);

function addeight(first,second){
    second = second || 0;
    const total = first + second;
    return total;
}
const resulteight = addeight(10,20);
console.log(resulteight);

function addthree(first,second=0){
    const total = first + second;
    return total;
}
const resultthree = addthree(10,20);
console.log(resultthree);

function addfour(first,second=0){
    const total = first + second;
    return total;
}
const resultfour = addfour(10);
console.log(resultfour);

function addfive(first=0,second=0){
    const total = first + second;
    return total;
}
const resultfive = addfive();
console.log(resultfive);

function addsix(first=0,second=0){
    const total = first + second;
    return total;
}
const resultsix = addsix(10,20);
console.log(resultsix);

function fullname(first,last='choudhuri'){
    const name = first + ' ' + last;
    return name;
}
const name = fullname('Golam');
console.log(name);