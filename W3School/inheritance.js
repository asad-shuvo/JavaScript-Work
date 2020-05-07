class car{
    constructor(name,madeYear){
        this.name=name;
        this.madeYear=madeYear;
    }
    details(){
        return `I have ${this.name} and it was build in ${this.madeYear}`;
    }
 
}

class model extends car{
    constructor(name,madeYear,model){
        super(name,madeYear);
        this.model=model;
    }
    detailsShow(){
        return `${this.details()} and the model of the car is ${this.model}`;
    }
}

myCar=new model("ford",1980,"new");
console.log(myCar.detailsShow());


//Gette and Setter

class car2{
    constructor(name,madeYear){
        this.name=name;
        this.madeYear=madeYear;
    }

    set cname(x){
        this.name=x;
    }
    get cname(){
        return this.name;
    }
    details(){
        return `I have ${this.name} and it was build in ${this.madeYear}`;
    }
 
}

newCar2=new car2("Ferari",1887);
newCar2.cname="volvo";
console.log(newCar2.cname);

