var cars = ["Saab", "Volvo", "BMW"];
console.log(cars.length);
console.log(cars.sort());

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Lemon");

let test=[];
test["1"]="john";
test["2"]="hi";
console.log(test["2"]);//It will work
console.log(test[0]);//but here it will undefined

console.log(Array.isArray(fruits));
   // returns true

   console.log(fruits instanceof Array );

   //toString
   let stringConvert=fruits.toString();
   console.log(stringConvert);//it will output with a ","

   let joinConvert=fruits.join("*");
   console.log(joinConvert);

   fruits.shift();
   console.log(fruits);
   fruits.unshift("kola");
   console.log(fruits);
   

   //Splice

   fruits.splice(2,0,"new1","new2");
   console.log(fruits);

   fruits.splice(2,2);
   console.log(fruits);

   //Merging
   var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var arr3 = ["Robin", "Morgan"];
var myChildren = arr1.concat(arr2, arr3);   // Concatenates arr1 with arr2 and arr3
   console.log(myChildren);

   var sliceFr=fruits.slice(3);
   console.log(sliceFr);
   var sliceFr2=fruits.slice(1,3);
   console.log(sliceFr2);

   console.log(fruits.sort());

   let arrNum=[1,2,24,100,23,12,11];
   console.log(arrNum.sort(function(a,b){
       return a-b;
   }));
   console.log(arrNum.reverse(function(a,b){
    return b-a;
}));

console.log(Math.max.apply(null,arrNum));
console.log(Math.min.apply(null,arrNum));

var cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];

  console.log(cars.sort(function(a,b){
      return a.year-b.year;
  }));
  




   
   
   
   
   
   
   
   
   
   



