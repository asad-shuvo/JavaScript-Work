/*try{
    console.log('start of try runs');
    unicycled;
    
    console.log('End of the try run, never reach');
}catch(err){
    console.log('Error has occured '+err);
}finally{
    console.log('This is always run');
}

console.log('...then the exection continues');*/
//It wont work
/*
try{
    setTimeout(function(){//try must be inside a function
        noSuchvariable;//script will die here
        
    },1000);
    
}catch(err){
    alert('wont work');
}*/
/*
setTimeout(function(){
    try{
        noSuchvariable;//script will die here
    }catch(err){
        alert('Error is caught here'+err);
    }
},1000)
*/

/*
try{
    lalala;
}catch(err){
    alert(err.name);
    alert(err.message);
    alert(err.stack);
    alert(err);
}*/

//Try with JSON

/*let json='{"name":"John","age":23}';
let user=JSON.parse(json);
alert(user.name);
alert(user.age);*/

//Bad JSON
/*
let json='{bad jason}';
try{
    let user=JSON.parse(json);
    alert(user.name);
}
catch(e){
    alert('Our apologies, we could not retrieve right JSON');
    alert(e.name);
    alert(e.message);
    alert(e.stack);
}*/
/*let json = '{ "age": 30 }'; // incomplete data

try {

  let user = JSON.parse(json); // <-- no errors
  alert( user.name ); // no name!

} catch (e) {
  alert( "doesn't execute" );
}*/
/*
let json='{"age":30}';
try{
    let user=JSON.parse(json);
    if(!user.name){
        throw new SyntaxError("Incomplete data: no name");
    }
}catch(e){
    alert(e.message);
    alert(e.name);
    alert(e.stack);
}*/
/*
let json = '{ "age": 30 }'; // incomplete data
try {

  let user = JSON.parse(json);

  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name");
  }

  blabla(); // unexpected error

  alert( user.name );

} catch(e) {

  if (e.name == "SyntaxError") {
    alert( "JSON Error: " + e.message );
  } else {
    throw e; // rethrow (*)
  }

}*/
/*
function readData() {
  let json = '{ "age": 30 }';

  try {
    // ...
    blabla(); // error!
  } catch (e) {
    // ...
    if (e.name != 'SyntaxError') {
      throw e; // rethrow (don't know how to deal with it)
    }
  }
}

try {
  readData();
} catch (e) {
  alert( "External catch got: " + e ); // caught it!
}*/

/*
try {
  alert( 'try' );
  if (confirm('Make an error?')) BAD_CODE();
} catch (e) {
  alert( 'catch' );
} finally {
  alert( 'finally' );
}

*/

//Fib code with exception

let num=prompt('Enter a positive number');

let diff,result;

function fib(n){
    if(n<0 || Math.trunc(n)!=n){
        throw new Error("Must be the number, and also an integer");
    }
    return n<=1?n:fib(n-1)+fib(n-2);
}

let start=Date.now();

try{
    result=fib(num);
}catch(e){
    result=0;
}finally{
    diff=Date.now()-start;
}

alert(result || "error occured");
alert(`Torat execute time ${diff}`);