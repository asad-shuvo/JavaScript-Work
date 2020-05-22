let set =new Set();

let john = { name: "John" ,age:23};
let pete = { name: "Pete" ,age:20};
let mary = { name: "Mary" ,age:21};

set.add(john);
set.add(pete);
set.add(mary);
set.add(john);

alert(set.size);

for(let user of set){
    console.log(`${user.name}  ${user.age}`);
}

set.forEach((user,val,set)=>{
    console.log(`${user.name}  ${user.age}`);
})

