calculateYear(1998);//It will works because of hoisting
function calculateYear(year){
    console.log(2020-year);
}
//retirementYear(1998)//it wont work because its function expression
var retirementYear=function(year){
    console.log(65-(2020-year));
}

//console.log();

console.log(age);//it will work but will show undefined
var age=23;
console.log(height);//it wont work because hoist only load global variable

function c(){
    var height=23;
}
c();