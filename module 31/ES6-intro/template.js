const person1 = 'Adam Sand';
const person2 = "Ben white";
const person3 = `Donald Trump`;

const multiline = 'First line text \n' + 'second line of code \n' + 'Third line of string \n' + 'Fourth line of string';
console.log(multiline);

const newmultiline = `First line text
second line of code
Third line of string
Fourth line of string`;
console.log(newmultiline);

const a =20;
const b = 30;
const nums = [78,98,45,12,6,444];
const summary = 'sum of: ' + a + ' and ' + b + ' is: ' + (a+b);
console.log(summary);

const newsummary = `sum of ${a} and ${nums.length} is ${a+b}` ;
console.log(newsummary);