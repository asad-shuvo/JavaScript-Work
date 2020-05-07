
const boxes = document.querySelectorAll('.box');

//ES5
//var boxesArray5= Array.prototype.slice.call(boxes);
//
//boxesArray5.forEach(function(cur){
//   cur.style.backgroundColor='blue'; 
//});

//ES6

const boxesArr6 = Array.from(boxes);

boxesArr6.forEach(cur=>{
   cur.style.backgroundColor='dodgerblue'; 
});


//ES6
for(const cur of boxesArr6){
    if(cur.className.includes('blue')){
        continue;
    }
    cur.textContent = 'I changed to blue';
}


//ES5
var ages=[12,17,8,21,14,11];

var full = ages.map(function(cur){
   return cur>=18; 
});
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);


//ES6
const res=ages.findIndex(cur => cur>=18);
console.log(res);
console.log(ages.find(cur=> cur>=18));