function kitchen(){
    let roast = 0;
    return function(){
        roast++;
        return roast;
    }
}
const firstserver = kitchen();
console.log(firstserver);
console.log(firstserver());
console.log(firstserver());
console.log(firstserver());


const firstserverone = kitchen();
console.log(firstserverone());
console.log(firstserverone());
console.log(firstserverone());