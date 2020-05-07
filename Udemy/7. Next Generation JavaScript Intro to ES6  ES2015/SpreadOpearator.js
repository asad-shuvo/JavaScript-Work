function addFourAges(a,b,c,d){
    return a+b+c+d;
}

var sum1=addFourAges(18,21,23,34);

console.log(sum1);

//ES5

var ages =[18,20,32,33];
var sum2=addFourAges.apply(null,ages);
console.log(sum2);

//ES6
const max3 = addFourAges(...ages);
console.log(max3);


const familySmith =['john','jane','mark'];
const familyMiller =['mary','bob','jack'];

const bigFamily=[...familySmith,'Emily', ...familyMiller];
console.log(bigFamily);

const h= document.querySelector('h1');
const boxes = document.querySelectorAll('.box');

const all =[h, ...boxes];
Array.from(all).forEach(cur => cur.style.color ='pruple');

//console.log(all);