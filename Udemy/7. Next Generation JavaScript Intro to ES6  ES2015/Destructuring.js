//ES5
//var john=['john',23];
//var name=john[0];
//var age=john[1];

const [name,age]=['john',23];
console.log(name);
console.log(age);

function calcAgeRetirement(year){
    const age=new Date().getFullYear()-year;
    return [age, 65-age];
}

const[age2,retirement]=calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);