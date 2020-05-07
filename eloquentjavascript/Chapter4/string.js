let fruit='coconutsu';
console.log(fruit.slice(3));
console.log(fruit.slice(3,5));
console.log(fruit.indexOf('u'));
console.log(fruit.indexOf('su'));
console.log(fruit.lastIndexOf('u'));

//The trim() method removes whitespaces(spaces, newline,tabs,and simillar char) from the start

let line="    whats    is this  ";
console.log(line.trim());

console.log("  okay  \n  ".trim());

//padStart
console.log(String(6).padStart(3,'0'));//Add some char at begining

//Split

let sentence="Hi there mark";

let storeVal=sentence.split(" ");
console.log(storeVal);

//join

console.log(storeVal.join('.'));

//repeat

console.log("La".repeat(3));

