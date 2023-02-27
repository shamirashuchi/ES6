const student = {
    name: 'Kodom Ali',
    money : 5000,
    study: 'Math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function(){
        //console.log(this.name, 'is perticipating in an exam');
        return this.name + ' is perticipating in an exam';
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
const result = student.exam();
console.log(result);

const badam = {
    name: 'kacha badam',
    money:8000
}
const result2 = student.exam.call(badam);
console.log(result2);

const badammoney = student.treatDey.call(badam,400,40);
console.log(badammoney);

const badammoney2 = student.treatDey.apply(badam,[1000,100]);
console.log(badammoney2);

const badamalitreat = student.treatDey.bind(badam);
const remaining = badamalitreat(1000,100);
console.log(remaining);