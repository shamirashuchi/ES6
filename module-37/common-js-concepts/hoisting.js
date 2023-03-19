prints();
//print10();
//console.log(print10());
//print11();
//console.log(print11());
for(var i = 0; i< 5;i++){
    console.log(i);
}
console.log('outside',i);

function prints(){
    console.log('inside print', 5);
}

const print10 = function(){
    console.log('inside print10',5);
}

var print11 = function(){
    console.log('inside print10',5);
}