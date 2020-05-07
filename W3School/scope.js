/*
//Inside scope
{
    var x=2;
    let y=3;
}
console.log(x);//can be access from outside
// console.log(y);//can't access from outside
*/
/*
//for function let and var work as same

function test(){
    var x=23;
    let y=20;
}

//we cna't access both,
console.log(x);
console.log(y);
*/
/*
//Redeclaring

var x=20;
let y=23;

{
    var x=12;
    let y=10;
}
console.log(x);//12
console.log(y);//23
*/

// loop sccope
/*
var i=5;
for(var i=0;i<=10;i++)console.log(i);

console.log(i);//11

let j=5;
for(let j=0;j<=10;j++)console.log(i);

console.log(j);//5
*/

//Hoisted

console.log(carName);//undefined ,but still works
var carName;

console.log(carame);//won't work
let carame;











