let fruit="apple";

let bag={
    [fruit]:5
}

console.log(bag.apple);

// let user = {};

// alert( user.noSuchProperty === undefined ); // true means "no such property"

// let user = { name: "John", age: 30 };

// alert( "age" in user ); // true, user.age exists
// alert( "blabla" in user ); // false, user.blabla doesn't exist
let user = {
    name: "John",
    age: 30,
    isAdmin: true
  };
  
//   for (let key in user) {
//     // keys
//     alert( key );  // name, age, isAdmin
//     // values for the keys
//     alert( user[key] ); // John, 30, true
//   }


