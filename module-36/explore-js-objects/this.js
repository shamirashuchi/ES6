//console.log(this);
const student = {
    name: 'Kodom Ali',
    money : 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function(){
        console.log(this);
        //console.log(this.name, 'is perticipating in an exam');
        return this.name + ' is perticipating in an exam';
    },
    examArrow: () =>{
        console.log(this);
    },
    examnested: () =>{
        const arrow = () =>{
            console.log(this)
        }
        arrow();
    },
    improveExam: function(subject){
        this.exam();
        return `${this.name} is taking improvement exam on ${subject}`
    },
    treatDey: function(amount,tips){
        this.money = this.money - amount - tips;
        return this.money;
    }
}
const badam = {
    name: 'kacha badam',
    money:8000
}
student.exam();
badam.exam = student.exam;
badam.exam();
student.examArrow();
student.examnested();

function clickhandler(){
    console.log('Inside click handler',this);
}

document.getElementById('btn-click2').addEventListener('click', function(){
    console.log(this);
})