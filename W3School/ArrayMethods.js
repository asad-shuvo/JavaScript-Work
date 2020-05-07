//forEach()
const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  let age=[23,20,21,24,56,18,17,87,56];
/*
companies.forEach(function(company){
    console.log(company.name);
    
});
let val=[1,2,3,4,5];

let addFun=(val,index,arr)=>{
    console.log(val , index, arr);
    
    // console.log(`value is ${val}`);
    
    val=val*2;
    // return val*2;
}

val.forEach(function(addFun,i){
    val[i]=val[i]*2;
});

var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt = txt + value + "<br>";
}
console.log(txt);
console.log(val);



//Filter
const canDrink=age.filter(function(age){
    if(age>=21)return true;
})

console.log(canDrink);

const canDrink2=age.filter(age=>age>=21);
console.log(canDrink2);



const retailCom=companies.filter(company=>company.category=="Retail");
console.log(retailCom);*/

//Map
/*
const companyName=companies.map(company=>company.name);
console.log(companyName);

const company80s=companies.map(company=>{
   if (company.start>=1980 && company.end<=1990){
       return company.name;
   }
});
console.log(company80s);


//sort
companies.sort((a,b)=>{
    return a.start-b.start;
});
console.log(companies);*/

//Reduce

const ageSum=age.reduce(function(total,age){
    return total+age;
},0);

console.log(ageSum);

const ageSum2=age.reduce((total,age2)=>total+age2,0);


const companuTotal=companies.reduce((total,company)=>
    total+(company.end-company.start),0);
console.log(companuTotal);

/*
//Every

let num=[45, 4, 9, 16, 25];
const ans=num.every(n=>n>=20);
console.log(ans);

let num2=[45, 24, 29, 56, 25];
const ans2=num2.every(n=>n>=20);
console.log(ans2);
*/
/*
//some
var numbers = [45, 4, 9, 16, 25];
var someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

//indexOF
var fruits = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");
console.log(a);
*/
var numbers = [45, 4, 9, 16, 25];
const ret=numbers.find(n=>n>=20);
console.log(ret);










    