var john={
    firstName:'john',
    lastName :'smith',
    mass:120,
    height:6,
    calcBMIJohn: function(){
    this.BMI=this.mass/(this.height*this.height);
        return this.BMI;
    }
    
};
var Mark={
    firstName:'Mark',
    lastName :'Denver',
    mass:100,
    height:6,
    calcBMIMark: function(){
    this.BMI=this.mass/(this.height*this.height);
        return this.BMI;
    }
    
};
var markBMI=Mark.calcBMIMark();
var johnBMI=john.calcBMIJohn();
if(markBMI>johnBMI){
    console.log(Mark.firstName+' '+Mark.lastName+'  has better BMI and its '+markBMI);
}
else if(markBMI<johnBMI){
    console.log(john.firstName+' '+john.lastName+'  has better BMI and its '+johnBMI);
}
else{
    console.log("The have the same BMI");
}
console.log(john);
console.log(Mark);