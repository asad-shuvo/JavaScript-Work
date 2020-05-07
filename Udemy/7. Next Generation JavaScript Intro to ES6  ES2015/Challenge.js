class park{
    constructor(name,buildYears,noOFTree,parkArea){
        this.name=name;
        this.buildYears=buildYears;
        this.noOFTree=noOFTree;
        this.parkArea=parkArea;
    }
    
    
}
const Green=new park("Green",1890,1005,1200);
const National=new park("National",1992,805,500);
const Oak=new park("Oak",1950,105,600);

class street extends park{
    constructor(name,buildYears,lengttStreet,size=3){
        super(name,buildYears);
        
        this.lengttStreet=lengttStreet;
        this.size=size;
       
    }
}


const Ocean=new street('Ocean Street',1990,12000,4);
const River=new street('River Street',1890,2000);
const Hrid=new street('Hrid Street',1995,20005,4);
const Nala=new street('Nala Street',1995,120003,6);



park.prototype.treeDencity=function(){
         console.log(`${this.name} Park has a tree dencity of ${this.noOFTree/this.parkArea} trees per sq km`);
     }




var parks=[];
parks.push(Green,National,Oak);

const sum=parks.reduce((totalSum,age)=>totalSum+(2020-age.buildYears),0);

function parkReport(){
    console.log("----Parks Report----")
console.log(`Our ${parks.length} has averege age of ${sum/parks.length} years`);

parks.forEach(element=>element.treeDencity());

//console.log(avgAgeOfPark);
var treeMoreThan1000=parks.map(function(el){
  return el.noOFTree>1000;  
});
for(let i=0;i<treeMoreThan1000.length;i++){
    if(treeMoreThan1000[i]===true)console.log(`${parks[i].name} Park has more than 1000 tress`);
}
    
}

parkReport();




street.prototype.streetName=function(){
    
    const classification=new Map();
        classification.set(1,'tiny');
        classification.set(2,'small');
        classification.set(3,'normal');
        classification.set(4,'big');
        classification.set(5,'huge');
        classification.set(6,'huge big');
    
    console.log(`${this.name} build in ${this.buildYears}, is a ${classification.get(this.size)} street`);
}

const streets=[Ocean,River,Hrid,Nala];

const totalLenth=streets.reduce((total,len)=>
    total+len.lengttStreet,0);
function streetReport(){
    console.log("----Street Report----");
    
    console.log(`${streets.length} streets has total lenght of ${totalLenth} km and averege is ${totalLenth/streets.length}`);

streets.forEach(el=>el.streetName());

}
streetReport();



