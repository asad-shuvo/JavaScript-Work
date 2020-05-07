var Perosn5= function(name,yearOfBirth,job
                       ){
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
}

Perosn5.prototype.calculateAge =
    function(){
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
}
var john5 = new Perosn5('John',1990,'teacher');

//ES6
class Person6{
    constructor(name,yearOfBirth,job){
        this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
    }
    
    calcculateAge(){
        var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
    }
    
    static greeting(){
        console.log('Hey there');
    }
}
const john6= new Person6('John',1990,'teacher');

Person6.greeting();
//console.log(Perso)