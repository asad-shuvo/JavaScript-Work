var a=34,b;
a=b;
a=23;
b=45;
console.log(a);
console.log(b);

var obj1={
  name:'john',
    age:23
};
var obj2={
  name:'jake',
    age:24
};

obj2.age=30;
obj1=obj2;

console.log(obj1.age);
console.log(obj2.age);


var age=27;
var obj={
    name:"jake",
    city:'Lisbon'
}
function change(a,b){
    a=30;
    b.city='san fransisco';
}
change(age,obj);
console.log(age);
console.log(obj.city);