const student = {
    name: 'Kolim uddin',
    age: 15,
    class: 'Ten',
    marks: {
        math: 78,
        physics: 89,
        chemistry: 65
    },
}
const marks = student.marks;
console.log(marks);

const math = student.marks.math;
console.log(math);

const chemistry  = student['marks']['chemistry'];
console.log(chemistry);

const subject = 'math';
const subjectmarks = student.marks[subject];
//subject variable tai . dile error asbe
//const subjectmarksone = student.marks.subject;
console.log(subjectmarks);