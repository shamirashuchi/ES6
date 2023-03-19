//number-1
function add(a,b){
    const total = a+b;
    console.log(a,b);
    return total;
}
//console.log(a,b);
//console.log(total)
add(5,7);

function sum(a,b){
    const total = a+b;
    console.log(a,b);
    if(b>5){
        const sumone = 25 + a + a;
    }
    else{
        const sumone = 5+a+b;
        var current = sumone;
    }
    //console.log(sumone);
    console.log(current);
    return total;
}
sum(5,7);
sum(5,3);