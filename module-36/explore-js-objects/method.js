const student = {
    name: 'Kodom Ali',
    money : 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function(){
        //console.log(this.name, 'is perticipating in an exam');
        return this.name + 'is perticipating in an exam';
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
//student.exam();
const output = student.exam();
console.log(output);
const reExam = student.improveExam('Algebra');
console.log(reExam);
const remaining = student.treatDey(900,100);
console.log(remaining);
const dolaRemaining = student.treatDey(500,50);
console.log( dolaRemaining);