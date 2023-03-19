//trythy
//true value dile truthy hobe
const y = true;
if(y){
    console.log('value of x is truthly');
}
else{
    console.log('value of x is falsy');
}

//any number (+ve, -ve) will be truthy other than 0
const z = 2;
if(z){
    console.log('value of x is truthly');
}
else{
    console.log('value of x is falsy');
}

const a = -2;
if(a){
    console.log('value of x is truthly');
}
else{
    console.log('value of x is falsy');
}
//any string and one space string is truthy except empty '' 
//any string other than empty
const c = 'a';
if(c){
    console.log('value of x is truthly');
}
else{
    console.log('value of x is falsy');
}

const d = 'abnhgf';
if(d){
    console.log('value of x is truthly');
}
else{
    console.log('value of x is falsy');
}

//one space string is truthy
const f = ' ';
if(f){
    console.log('value of x is truthly');
}
else{
    console.log('value of x is falsy');
}
//'0' and 'false' zero and false  in string is truthy
const g = '0';
if(g){
    console.log('value of x is truthly');
}
else{
    console.log('value of x is falsy');
}
const h = 'false';
if(h){
    console.log('value of x is truthly');
}
else{
    console.log('value of x is falsy');
}
// empty object is a truthy value
let k = {};
if(k){
    console.log('value of x is truthly');
}
else{
    console.log('value of x is falsy');
}
//not empty object is a truthy value
let l = {a:5, b:56};
if(l){
    console.log('value of x is truthly');
}
else{
    console.log('value of x is falsy');
}
//empty array is truthy
let m = [];
if(m){
    console.log('value of x is truthly');
}
else{
    console.log('value of x is falsy');
}
//not empty array is truthy
let n = [3,4,5];
if(n){
    console.log('value of x is truthly');
}
else{
    console.log('value of x is falsy');
}
//falsy
//false value dile falsy hobe
const x = false;
if(x){
    console.log('value of x is truthly');
}
else{
    console.log('value of x is falsy');
}
// 0 value dile falsy hobe
const b = 0;
if(b){
    console.log('value of x is truthly');
}
else{
    console.log('value of x is falsy');
}
//''empty string is false
const e = '';
if(e){
    console.log('value of x is truthly');
}
else{
    console.log('value of x is falsy');
}
//undefined is always a falsy value
let i;
if(i){
    console.log('value of x is truthly');
}
else{
    console.log('value of x is falsy');
}
//null is a falsy value
let j = null;
if(j){
    console.log('value of x is truthly');
}
else{
    console.log('value of x is falsy');
}

//optional
//check falsy
const o = null;
if(!o){
    console.log('value is falsy')
}

//check truthy
const p = ' ';
if(!!p){
    console.log('value is truthy')
}
const q = 50;
if(!!q){
    console.log('value is truthy')
}
const r = {class:9};
if(!!r){
    console.log('value is truthy')
}
const s = {};
if(!!s){
    console.log('value is truthy')
}