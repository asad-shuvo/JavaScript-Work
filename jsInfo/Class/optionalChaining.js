/*let user1={
    admin(){
        alert("This is admin");
    }
};
let user2={};

user1.admin?.();
user2.admin?.();*/

let user1 = {
    firstName: "John"
  };
  
  let user2 = null; // Imagine, we couldn't authorize the user
  
  let key = "firstName";

  alert(user1?.[key]);
  alert(user2?.[key]);

  alert( user1?.[key]?.something?.not?.existing); // undefined

  delete user1?.name; // delete user.name if user exists

  