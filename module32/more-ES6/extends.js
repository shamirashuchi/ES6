class teammember{
    name;
    location;
    constructor(names,locations){
        this.name = names;
        this.location = locations;
    }
    provideFeedback(){
        console.log(`${this.name} thank you for your feedback.`)
    };
}
class Instructor extends teammember{
    designation = 'web course Instructor'
    team = 'web team'
    constructor(name,location){
        super(name,location);
    }
    startsupportsession(time){
        console.log(`start the support session at ${time}`)
    }
    createquize(module){
        console.log(`please create quize for module ${module}`)
    }
}

class Devloper extends teammember{
    designation = 'web course Instructor'
    team = 'web team'
    tech;
    constructor(name,location,tech){
        super(name,location);
        this.tech = tech;
    }
    developfeature(time){
        console.log(`please develop the ${feature}`)
    }
    release(version){
        console.log(`please release the version ${version}`)
    }
}

class Jobplacementteam  extends teammember{
    designation = 'job placement commandos'
    team = 'job placement team'
    tech;
    constructor(name,location,tech){
        super(name,location);
        this.tech = tech;
    }
    provideresume(time){
        console.log(`please develop the ${feature}`)
    }
    preparestudent(version){
        console.log(`please release the version ${version}`)
    }
}
const alia = new Devloper('Alia Bhatt','Dhaka','React');
console.log(alia);
alia.provideFeedback();

const bipasha = new Jobplacementteam('bipasha','Kolkata','India');
console.log(bipasha);