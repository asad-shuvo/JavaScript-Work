console.log(this);//it will indicate window object

function calculateAge(year){
    console.log(2020-year);
    console.log(this);//it will also indicate window object
}
calculateAge(1998);

var john={
  name:'john',
    DOB:1998,
    calculateAge:function(){
        console.log(this);//It will indicate john object because its a method
        console.log(2020-this.DOB);
    function innerFunction(){
        console.log(this);//it will indicate window object
    }
        innerFunction();
    }
    
};
john.calculateAge();
var mike={
    name:'mike',
    DOB:1996
};
mike.calculateAge=john.calculateAge;//method borrowing
mike.calculateAge();