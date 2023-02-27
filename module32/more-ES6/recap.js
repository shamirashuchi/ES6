//default parameter
function calculateSalary(salary,tax=0.25,bonus=0){
    const remaining = salary - salary*tax;
    const total = remaining + bonus;
    return total;
}

//template string
const elementHTML = `
<div>
    <h3>Name: </h3>
    <p>Address: </p>
    <p>Salary: ${calculateSalary(1000,0,0)}</p>
    <p>Others: ${numbers[2]}</p>
</div>
`

//Arrow function
const doubleleft = x => x*2;
const calculateSalary2 = (salary,tax,bonus) => salary - salary * tax + bonus;

//spread
const ages = [11,13,15,14,10,16];
const newAges = [...ages,22,24,23];

//destructuring
const{x,y,z, ...c} = {x:45 , y:12 , z:33 , name: 'Sakib Al Hasan' , salary: 45000};
const [a,b, ...r] = [12,45,21,65,98];