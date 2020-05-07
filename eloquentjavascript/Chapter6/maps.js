
/*
let ages={
    Boris: 29,
    Liang:30,
    Bob:32
};


console.log(`Boris is ${ages["Boris"]} years old`);

console.log('Is jack in ages?',"jack" in ages);
console.log('Is toString in ages?',"toString" in ages);//To string every object buildin prototype, so its true
*/
//Map

let ages = new Map();
ages.set("Boris",29);
ages.set("Bob",19);
ages.set("jack",24);

console.log(`Age of Boris ${ages.get("Boris")} years old `);

console.log(`is toString in ages`,ages.has("toString"));
console.log(`is jene in ages`,ages.has("jene"));
//console.log(`Age of Boris ${ages["Boris"]} years old `);

console.log({x:1}.hasOwnProperty("x"));
console.log({x:1}.hasOwnProperty("y"));