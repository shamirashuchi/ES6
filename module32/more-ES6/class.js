//syntactic suger
class Instructor{
    name;
    designation = 'web course Instructor'
    team = 'web team'
    location;
    constructor(name,location){
        this.name = name;
        this.location = location;
    }
    startsupportsession(time){
        console.log(`start the support session at ${time}`)
    }
    createquize(module){
        console.log(`please create quize for module ${module}`)
    }
}
//class theke object create
const aamir = new Instructor('aamir','mumbai');
console.log(aamir);
aamir.startsupportsession('9.00');
aamir.createquize(60);

const solaiman = new Instructor('Solaiman Khan', 'dhaka');
console.log(solaiman);