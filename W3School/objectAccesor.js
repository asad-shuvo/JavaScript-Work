var person={
    firstName: "John",
  lastName : "Doe",
  language : "",

  set setLang(lang){
      this.language=lang;
  },
  get getLang(){
      return this.language;
  },
  get fullName(){
      return `${this.firstName} ${this.lastName}`;
  }
}

person.setLang="English"


console.log(person.getLang);
console.log(person.fullName);

//Object Define Property

var obj={counter:0};

//Define setters

Object.defineProperty(obj, "reset", {
    get : function () {this.counter = 0;}
  });

  Object.defineProperty(obj, "increment", {
    get : function () {this.counter++;}
  });
  Object.defineProperty(obj, "decrement", {
    get : function () {this.counter--;}
  });
  Object.defineProperty(obj, "add", {
    set : function (value) {this.counter += value;}
  });
  Object.defineProperty(obj, "subtract", {
    set : function (value) {this.counter -= value;}
  });
  obj.increment;
  obj.increment;
  obj.increment;
  obj.increment;
  obj.add=10;

//   console.log(obj.reset);
  console.log(obj.counter);

  
person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
  };

  console.log(person.name());
  
  
   