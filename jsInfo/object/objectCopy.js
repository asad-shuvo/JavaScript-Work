// let user = { name: "John" };

// let admin = user; // copy the reference

// console.log(admin.name);

// admin.name='pete';
// console.log(admin.name);

// console.log(user=== admin);

// let a={name:'pete'};
// let b={name:'pete'};

// console.log(a===b);//false
/*
let user = {
    name: "John",
    age: 30
  };
  
  let clone = {}; // the new empty object

  for(let key in user){
    clone[key]=user[key];
  }
clone.name='pete';
  console.log(user.name);// still John in the original object*/
/*
  let user={name:'jon'};
  Object.assign(user, {name:'pete'});
  
  console.log(user.name);
  */

 let user = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
  let clone =Object.assign({},user);

  user.sizes.height++;
  console.log(clone.sizes.height);
  
  

