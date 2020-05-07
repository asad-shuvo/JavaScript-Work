let fistName='John';
let lastName='Smith';
const yearOfBirth= 1993;

function calcAge(yearOfBirth){
    return 2020-yearOfBirth;
}

//ES5
console.log('This is '+fistName+' '+lastName+' And he is '+calcAge(yearOfBirth)+' years of old');

//ES6
console.log(`This is ${fistName} ${lastName}  and he is ${calcAge(yearOfBirth)}  years old`);


const n=`${fistName} ${lastName}`;
console.log(n.startsWith('J'));//Determine a string strats with a certain value
console.log(n.endsWith('h'));//Determine a string ends with a certain value
console.log(n.includes('JS'));//Determine a string has a certain value or values
console.log(`hi`.repeat(5));//It will repeat smething 