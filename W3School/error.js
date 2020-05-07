
/*
//Try and catch
try{
    addAlert("Hi there");
}catch(err){
        console.log(err);
        
}*/
/*
//Try throw and catch

let x=prompt("Enter a number");
try{
    if(x=="")throw "empty";
    if(isNaN(x))throw "Not a Number";

    x=Number(x);
    if(x<5)throw "Too low";
    else if(x>10) throw "Too high";
}catch (err){
    console.log(err);
    
}*/

//Error Object
//Range Error
var num = 1;
try {
  num.toPrecision(500);   // A number cannot have 500 significant digits
}
catch(err) {
  document.getElementById("demo").innerHTML = err.name;
}

//Reference Errore

let x;
try{
    x=y+1;
}catch(err){
    document.getElementById("demo").innerHTML=err.name;
}

//Syntex Error

try{
    eval("alert('Hello)");   // Missing ' will produce an error
}catch(err){
    console.log(err.name);
        
}

//Type error
var num = 1;
try {
  num.toUpperCase();   // You cannot convert a number to upper case
}
catch(err) {
  document.getElementById("demo").innerHTML = err.name;
}

//URI error
try {
    decodeURI("%%%");   // You cannot URI decode percent signs
  }
  catch(err) {
    document.getElementById("demo").innerHTML = err.name;
  }