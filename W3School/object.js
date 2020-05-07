//Using Object Literal
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",

    fullname: function () {
        return this.firstName+" "+this.lastName;
    }
  };

  console.log(person.firstName);
  console.log(person["firstName"]);

  console.log(person.fullname());

  //Using new Keyword

  let objectNew=new Object();
  objectNew.firstName="A";
  objectNew.lastName="B";
  objectNew.fullDetails=()=>{
        return `${this.firstName} ${this.lastName}`;
  }

  console.log(objectNew.firstName);

  var x=person;
  console.log(x);

  console.log(x.fullname());

  for(variable in person){
    //   console.log(person[variable]);
      
      console.log(`${variable}: ${person[variable]}`);
      
  }
  
  
  person.nationality="American";
 /* for(variable in person){
    //   console.log(person[variable]);
      
      console.log(`${variable}: ${person[variable]}`);
      
  }*/
  delete person.nationality;

  let myArry=Object.values(person);

  let myString=JSON.stringify(person);
  console.log(myString);

  
  console.log(myArry);
  
//StringiFy JS array
  var arr = ["John", "Peter", "Sally", "Jane"];

var myString1 = JSON.stringify(arr);
console.log(myString1);
