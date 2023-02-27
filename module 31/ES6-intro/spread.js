const max = Math.max(12,85,999,78);
console.log(max);
const numbers = [12,85,999,78];
const largest = Math.max(...numbers);
console.log(largest);

const numbers2 = [...numbers];
//Intigrity referrential
//const numbers2 = numbers;
numbers.push(55);
numbers2.push(7777);
console.log(numbers);
console.log(numbers2);
const numbers3 = [...numbers];
const numbers4 = [444,78,...numbers,111,33];
console.log(numbers4);
const numbersone = [1,2,3,4,4];
const lala = [...numbers,...numbersone];
console.log(lala);