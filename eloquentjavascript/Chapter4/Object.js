let newObject = {
    tree: 1,
  "this country": "bangladesh"  
};

console.log(newObject);

console.log(newObject["this country"]);
console.log(newObject.tree);
newObject.newPro='hi';
console.log(newObject);
console.log(newObject.newPro);

delete newObject.newPro;

console.log("newPro" in newObject);
console.log("tree" in newObject);


Object.assign(newObject, {k:2,z:3});
console.log(newObject);


let object1={val:120};
let object2={val:12};
let object3={val:120};
object1=object2;
console.log(object1===object2);
console.log(object1===object3);

const obj1={val:12};
obj1.val=15;
console.log(obj1.val);
//obj1={val:15};//Its now allowed