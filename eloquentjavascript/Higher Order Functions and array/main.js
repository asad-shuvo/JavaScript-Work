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

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//Foreach
companies.forEach(function(company,index,companies){
                //  console.log(company);
console.log(company.category);
                  });

//filter
/*
let canDrink=[];
for(let i=0;i<ages.length;i++){
    if(ages[i]>=21)canDrink.push(ages[i]);
}
console.log(canDrink);

const canDrinkFilter=ages.filter(function(age){
    if(age>=21)return true;
})
const canDrinkFilterArrowFun=ages.filter(age=> age>=21);
console.log(canDrinkFilter);
console.log(canDrinkFilterArrowFun);

let retailCompany=companies.filter(function(company){
   if(company.category==="Retail")return true; 
});

console.log(retailCompany);

const retailCompanyES6=companies.filter(company => company.category==="Retail");
console.log(retailCompanyES6);

//Get 80's Company

let get80sCompany=companies.filter(function(company){
   if(company.start>=1980 && company.start<=1989)return true; 
});
console.log(get80sCompany);

const get80sCompanyES6=companies.filter(company=>company.start>=1980 && company.start<=1989);
console.log(get80sCompanyES6);*/
/*
//Map

//Create array of company name

const companyName=companies.map(function(comapny){
   return comapny.name; 
});
console.log(companyName);
const companyNameES6=companies.map(comapny=>comapny.name);
   
console.log(companyNameES6);

const agesSqr=ages.map(age=>Math.sqrt(age));

console.log(agesSqr);

const ageMap=ages.map(age=>Math.sqrt(age)).map(age=>age*2);
console.log(ageMap);*/

/*
//sort
const companySortByDate=companies.sort(function(c1,c2){
   if(c1.start>c2.start)return 1;
    else return -1;
});
console.log(companySortByDate);

const companySortByDateRS6=companies.sort((a,b)=>(a.start>b.start)?1:-1);
console.log(companySortByDateRS6);


//sort Ages

const sortAges=ages.sort((a,b)=>(a>b)?1:-1);
console.log(sortAges);*/

/*
//Reduce

let totalSum=0;
for(let i=0;i<ages.length;i++){
    totalSum+=ages[i];
}
console.log(totalSum);

let totalSumES5=ages.reduce(function(totalSum,age){
 return totalSum+=age;  
},0);

console.log(totalSumES5);
let totalSumES6=ages.reduce((totalSum,age)=>totalSum+age,0);
// return totalSum+=age;  
//},0);

console.log(totalSumES6);


const totalYear=companies.reduce(function(totalYear,company){
                              return   totalYear+=(company.end-company.start);
                                 },0);
console.log(totalYear);
const totalYearES6=companies.reduce((totalYear,company)=>
                             totalYear+=(company.end-company.start),0
                                    );
                                 
console.log(totalYear);*/

//Combined
const combined=ages.map(age=>age*2).filter(age=>age>=40).sort((a,b)=>(a-b)).reduce((a,b)=>a+b,0);
console.log(combined);