console.log(null || 'agnes');
console.log('Jason' || 'agnes');

//Challenge

//FizzBuzz
let fizz='fizz',buzz='buzz';
let iter=Number(prompt('How many iteration?'));
if(!Number.isNaN(iter)){
    for(let i=0;i<iter;i++){
        if(i%3===0 && i%5===0){
            console.log(`${i} i: ${fizz}${buzz}`);
        }
        else if((i%3)===0 && (i%5)!==0){
            console.log(`${i} i: ${buzz}`);
        }
        else if((i%3)!==0 && (i%5)===0){
            console.log(`${i} i: ${fizz}`);
        }
       
    }
}
else{
    console.log('Enter a number');
}