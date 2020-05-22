class User {
    constructor(name){
        this.name=name;
    }

    sayHi(){
       return `${this.name} says Hi `;
    }
}

let newUser= new User('Jon');

console.log(typeof User);///Class in JS is acctually is a function

console.log(newUser.sayHi());


// ...or, more precisely, the constructor method

console.log(User===User.prototype.constructor);//true

console.log(User.prototype.sayHi);

// there are exactly two methods in the prototype
console.log(Object.getOwnPropertyNames(User.prototype));// constructor, sayHi


///Make class

function makeClass(phrase){
    // declare a class and return in
    return class{
        sayHi(){
            console.log(phrase);
            
        };
    };

}

//create a new class
let User2=makeClass('Hello');
new User2().sayHi();



