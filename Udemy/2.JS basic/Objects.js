//Object literal
var john={
    firstName:'John',
    lastName:'smith',
    DOB:1990,
    family:['jane','mark','Bob'],
    job:'teacher',
    ismarried:false,
    calcAge: function(){
    this.age=2018-this.DOB;
}
};
//console.log(john.firstName);
//console.log(john['lastName']);
//var x = 'DOB';
//console.log(john[x]);
//
////Mutate objects
//john.job = 'desiner';
//john['ismarried']=true;
//console.log(john);
////new Object system
//var jane= new Object();
//jane.firstname='Jane';
//jane.DOB=1998;
//jane['lastName']='Smith';
//console.log(jane);

//Object and methods

john.calcAge();
console.log(john);
