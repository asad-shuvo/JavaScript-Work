let map = new Map();

map.set(1,'num1');//numric value
map.set('1','num1');//string value

map.set(true,'bool1');//bool value

//same
// map.set(1,'num1').
// set('1','num1').
// set(true,'bool1');

console.log(map.get(1));

console.log(map.has('1'));

console.log(map.delete(true));

console.log(map.size);

map.clear();

console.log(map.size);


///using object as a key
let jon={
    name:'jon',
    age:23,
    job:'teacher'
};

let person =new Map();
person.set(jon,'its an object key,is not it awesome');
console.log(person.get(jon));


///Map iteration

let recipieMap=new Map([
   ['cocumber',500],
   ['tomato',300],
   ['onion',200] 
]);


//iteration through key

for(let vegatable of recipieMap.keys()){
    console.log(vegatable);
}

//iteration through values

for(let amount of recipieMap.values()){
    console.log(amount);
}
//iteration through key

for(let entry of recipieMap){
    console.log(entry);
}

//or forEach

recipieMap.forEach((value,key,map)=>{
    console.log(`${key}: ${value}`);
    
});


let objEntry= new Map(Object.entries(jon));

console.log(objEntry.get('job'));

//object from Map

let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
]);

console.log(prices.banana);

let fruit = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

let obj = Object.fromEntries(map.entries());

// done!
// obj = { banana: 1, orange: 2, meat: 4 }

alert(obj.banana);








