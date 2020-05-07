var Perosn5= function(name,yearOfBirth,job
                       ){
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
}

Perosn5.prototype.calculateAge =
    function(){
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var Athelete5 = function(name,yearOfBirth,job,olympicGames, medals){
    Perosn5.call(this, name, yearOfBirth, job);
    this.olympicGames=olympicGames;
    this.medals=medals;
}



Athelete5.prototype = Object.create(Perosn5.prototype);
Athelete5.prototype.wonMedal =function(){
    this.medals++;
    console.log(this.medals);
}

var john5 = new Perosn5('John',1990,'teacher');

var johnAthelete5 = new Athelete5('john',1990,'swimmer',3,10);
johnAthelete5.calculateAge();
johnAthelete5.wonMedal();


//ES6
class Person6{
    constructor(name,yearOfBirth,job){
        this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
    }
    
    calcculateAge(){
        var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
    }
}

class Athelete6 extends Person6 {
    constructor(name,yearOfBirth,job,olympicGames,medals){
        super(name,yearOfBirth,job);
        this.olympicGames=olympicGames;
        this.medals=medals;
    }
    wonMedal(){
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthelete6=new Athelete6('John',1990,'swimmer',3,10);
johnAthelete6.wonMedal();
johnAthelete6.calcculateAge();