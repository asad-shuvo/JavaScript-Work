var person=function(name,dateOfBirth,job,height,weight){
    this.name=name;
    this.dateOfBirth=dateOfBirth;
    this.job=job;
    this.height=height;
    this.weight=weight;
    
    
//     this.calculateAge=function(){
//        console.log(2016-this.dateOfBirth);
//    }
}
person.prototype.calculateAge = function(){
     console.log(2016-this.dateOfBirth);
}
person.prototype.calculateBMI=function(){
    return this.height*this.weight;
}
person.prototype.lastName='smith';
var jon=new person('jon',1990,'teacher',6,120);
var jan=new person('jan',1980,'fighter',6.5,130);
var jake=new person('jon',1970,'driver',6.3,140);
jon.calculateAge();
jan.calculateAge();
jake.calculateAge();
console.log(jon.lastName);
console.log(jan.lastName);
console.log(jake.lastName);

jon.BMI=jon.calculateBMI();
jan.BMI=jan.calculateBMI();
jake.BMI=jake.calculateBMI();
//console.log(jonBmi);
//jon.jonBMI=jonBmi;
console.log(jon);
console.log(jan);
console.log(jake);