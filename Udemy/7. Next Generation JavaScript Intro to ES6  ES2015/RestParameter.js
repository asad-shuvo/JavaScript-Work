//ES5
function isFullAge5(limit){
//    console.log(arguments);
var argsArr=Array.prototype.slice.call(arguments,1);
   argsArr.forEach(function(cur){
       console.log((2016-cur)>=limit);
   }) 
}

isFullAge5(21,1999,1990,1965);


//ES6
function isFullAge6(limit,...years){
   years.forEach(cur => console.log((2016-cur)>=limit));
}
isFullAge6(16,1999,1990,1965);//We can pass several arguments

