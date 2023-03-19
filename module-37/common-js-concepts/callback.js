function greeting(greetinghandler,name){
    greetinghandler(name);
}
// const name = 'halim mama';
// greeting(name);

// const number = 45;
// greeting(number);

// const numbers = [45,54,78];
// console.log(numbers);

// const laptop = {price: 45000,
//                brand: 'lanovo',
//                memory: 'bgb'
//                }
// greeting(laptop);


function greetinghandler(name){
    console.log('Good morning',name);
}

function greetevening(name){
    console.log('Good Evening', name)
}
function greetnight(name){
    console.log('Good night', name);
}

greeting(greetinghandler,'Tom Hanks');
greeting(greetinghandler,'Tom Brady');
greeting(greetinghandler,'Tom Cruise');
greeting(greetevening,'Tom Solaiman');
greeting(greetevening,'Tom Salman');
greeting(greetnight,'rasel');

function submithandler(){
    console.log('submit button clicked');
}
document.getElementById('btn-submit').addEventListener('click',submithandler);