//alada alada kore dekhte hbe tahole vlo output pabo
const first = {a : 2};
const second = {a : 2};
if(first === second){
    console.log('they are same');
}
else{
    console.log('different');
}

const firstone = {};
const secondone = {};
if(firstone === secondone){
    console.log('they are same');
}
else{
    console.log('different');
}

const firsttwo = {a : 2};
const secondtwo = {a : 2};
const third = secondtwo;
if(third === secondtwo){
    console.log('they are same');
}
else{
    console.log('different');
}

//to compare convert to string but order change korle kaj kore na tai vlo na eta use kora
const firststring = JSON.stringify(first);
const secondstring = JSON.stringify(second);
console.log(firststring,secondstring);
if(firststring === secondstring){
    console.log('they are same');
}
else{
    console.log('different');
}


const firstfive = {a : 2, b:3 , c:5};
const secondfive = {a : 2, b:3 , c:5};
const firststringone = JSON.stringify(firstfive);
const secondstringone = JSON.stringify(secondfive);
console.log(firststringone,secondstringone);
if(firststringone === secondstringone){
    console.log('they are same');
}
else{
    console.log('different');
}

 const firstsix = {a : 2, b:3 , c:5};
 const secondsix = {a : 2, c:5 , b:3};
const firststringtwo = JSON.stringify(firstsix);
const secondstringtwo = JSON.stringify(secondsix);
console.log(firststringtwo,secondstringtwo);
if(firststringtwo === secondstringtwo){
    console.log('they are same');
}
else{
    console.log('different');
}


function compareobject(firstsix,secondsix){
    const firstKeys = Object.keys(firstsix);
    const secondKeys = Object.keys(secondsix);
    if(firstKeys.length === secondKeys.length){
        return true;
    }
    else{
        return false;
    }
}
const isSame = compareobject(firstsix,secondsix);
console.log(isSame);

//length check kortese tai same ase
 const firstseven = {a : 2, b:3 , c:7};
const secondseven = {a : 2, b:3 , c:5};
function compareobject(firstseven,secondseven){
    const firstKeys = Object.keys(firstseven);
    const secondKeys = Object.keys(secondseven);
    if(firstKeys.length === secondKeys.length){
        return true;
    }
    else{
        return false;
    }
}
const isSameone = compareobject(firstseven,secondseven);
console.log(isSameone);


//keys gula array tai for of use korte hbe
function compareobject(firstseven,secondseven){
    const firstKeys = Object.keys(firstseven);
    const secondKeys = Object.keys(secondseven);
    if(firstKeys.length === secondKeys.length){
        for(const key of firstKeys){
            if(firstseven[key] !== secondseven[key]){
                return false;
            }
        }
        return true;
    }
}
const isSametwo = compareobject(firstseven,secondseven);
console.log(isSametwo);