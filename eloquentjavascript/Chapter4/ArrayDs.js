let val='doh';

console.log(typeof val.toUpperCase);
console.log(val.toUpperCase());

let toDoList=[];

let addItemFirst=(task)=>{
    toDoList.unshift(task);
}
let removeItemFromFirstPos=()=>{
    toDoList.shift();
}


addItemFirst('Milk');
addItemFirst('Sugar');
addItemFirst('Rice');
addItemFirst('cake');
console.log(toDoList);
removeItemFromFirstPos();
console.log(toDoList);
addItemFirst('Milk');
addItemFirst('Milk');
removeItemFromFirstPos();
console.log(toDoList);



console.log(toDoList.indexOf('Milk'));
console.log(toDoList.lastIndexOf('Milk'));
console.log(toDoList.lastIndexOf('Milk',2));
console.log(toDoList.slice(1));
console.log(toDoList.slice(1,2));

let concateAndSlice =(arr,index)=>{
    return arr.slice(0,index).concat(arr.slice(index+1));
}

console.log(concateAndSlice(toDoList,2));

