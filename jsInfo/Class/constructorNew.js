/*function User(name){
    this.name=name;
    this.age=23;
}

let user=new User('asar');

console.log(user.name);
console.log(user.age);*/
/*
function User() {
    alert(new.target);
  }
  
  // without "new":
  User(); // undefined
  
  // with "new":
  new User(); // function User { ... }*/


  function User(name) {
    this.name = name;
  
    this.sayHi =  function(){
        alert(`My name is ${this.name}`);
    };

  }

  let john = new User('john');
  console.log(john.sayHi());
  