//ES5
var name5='jane smith';
var age5=23;
name5 = 'jane Miller';
console.log(name5);


//ES6

const name6='Jane smith';
let age6=23;
//name6 ='jane Miller';//We cant chage const variable
console.log(name6);


//ES5 is function-scope
function driverLicence5(passedTest){
    console.log(firstname);
    if(passedTest){
        var firstname='john';
        var age=1998;
    }
    console.log(firstname+'  has passed the test and he was born in '+age);
}

driverLicence5(true);

//ES6 is blocked-scope

function driverLicence6(passedTest){
    //var declare inside a scope won't work outside the scope and const must declare in the scope
//    console.log(firstname);//we can't access a variable before it declared, but its hoisted like ES5
    let firstname;
        const age=1998;
    if(passedTest){
        firstname='john';
    }
    console.log(firstname+'  has passed the test and he was born in '+age);
}

driverLicence6(true);


let i=23;

for(let i=0;i<5;i++){
    console.log(i);//it will access inside the scope 
}

console.log(i);

var j=23;
for(var j=0;j<5;j++){
    console.log(j);
}
console.log(j);

//But in ES5 its overridden
//ES6 block and IIFEs
{
    const a=1;
    let b=2;
}
//console.log(a+b);//it will give error