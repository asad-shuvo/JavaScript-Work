var names=['john','mark','jane'];
var years=new Array(1998,1969,1948);
console.log(names.length);
console.log(names[0]);

//Mutate array data
names[1]='Hank';
names[names.length]='Harry';
console.log(names);

//Differnet Date Types
var john=['john','smith',1998,'teacher',false];
john.push('blue');//Add element at the end
john.unshift('Mr.');//add elemnts begining
john.pop(john);//delete last element
john.shift(john);//remove 1st element
console.log(john.indexOf(1998));
console.log(john.indexOf(23));//If not in array it will reurn -1
console.log(john);

var isDesigner=john.indexOf('designer')===-1?'John is not a designer':'John is a designer';
console.log(isDesigner);

