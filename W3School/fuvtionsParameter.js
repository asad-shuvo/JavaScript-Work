/*const fun1=function(a,b,c){
    console.log(a,b,c);//one will give 10 and rest of them are undefined
    
}

fun1(10);

//we can set default value
const fun2=function(a,b=10,c){
    if(c==undefined)c=0;
    console.log(a,b,c);//one will give 10 and rest of them are undefined
    
}

fun2(10);

let x=findMax(12,34,1,23,4,567,78);

function findMax(){
    let i;
    let max=-Infinity;

    for(i=0;i<arguments.length;i++){
        if(max<arguments[i]){
            max=arguments[i];
        }
    }
    return max;
}

console.log(x);

// Invoking a Function as a Method
let myObject={
    firstName:"John",
    lastName:"Doe",
    fullName:function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

console.log(myObject.fullName());
*/
/*
//Function constructor

function myFunction(arg1, arg2) {
    this.firstName = arg1;
    this.lastName  = arg2;
  }
  
  var x = new myFunction("John","Doe")
  document.getElementById("demo").innerHTML = x.firstName; */


//call method
/*
var person={
fullName:function(){
    return `${this.firstName} ${this.lastName}`;
}
}

var person1={
    firstName:"John",
    lastName:"Doe"
}

var person2={
    firstName:"Mary",
    lastName:"Jane"
}

console.log(person.fullName.call(person1));
console.log(person.fullName.call(person2));



//call method with arguments
var person={
    fullName:function(city,country){
        return `${this.firstName} ${this.lastName} ${city} ${country}`;
    }
    }
    
    var person1={
        firstName:"John",
        lastName:"Doe"
    }
    
    var person2={
        firstName:"Mary",
        lastName:"Jane"
    }
    
    console.log(person.fullName.call(person1,'Dhaka','BD'));
    console.log(person.fullName.call(person2,'Dilli','India'));

    */

    //Apply method
    var person={
        fullName:function(city,country){
            return `${this.firstName} ${this.lastName} ${city} ${country}`;
        }
        }
        
        var person1={
            firstName:"John",
            lastName:"Doe"
        }
        
        var person2={
            firstName:"Mary",
            lastName:"Jane"
        }
        
        // console.log(person.fullName.apply(person1));
        // console.log(person.fullName.apply(person2));
        console.log(person.fullName.apply(person1,["Dhaka","BD"]));
        console.log(person.fullName.apply(person1,["Dilli","India"]));
