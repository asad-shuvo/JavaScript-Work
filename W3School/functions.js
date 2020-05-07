
/*
function myFunction(p1,p2){
    return p1*p2;
}

console.log(myFunction(10,20));

//Function constructor
var myFunction=new Function("a","b");
var myFunction=(4,3);


//Function hoisting
myFunction2(5);

function myFunction2(val){
    console.log(val);
}

//Self-Invoking Functions

(function(){
    console.log("hello there");

    
})();
*/
/*
function myFunction(a, b) {
    return arguments.length;
  }

  let x=myFunction(2,3);
  console.log(x);//return the length of the parameter
*/
  //toString
  function fun2(a,b){
      return a*b;
  }

  let x=fun2(2,3).toString();
  console.log(x);
  
  