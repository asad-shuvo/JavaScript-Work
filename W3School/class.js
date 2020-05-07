class car{
    constructor(name,madeYear){
        this.name=name;
        this.madeYear=madeYear;
    }
    details(){
        return `I have ${this.name} and it was build in ${this.madeYear}`;
    }
    static hello(){
        console.log("its static");
        return "hello";
        
    }
    static hello2(x){
        return `This is an object and its name is ${this.x} and brand name is ${x.name}`;
    }
}

myCar=new car("Ford",1980);

console.log(myCar.name);
console.log(myCar.details());

console.log(car.hello());
// console.log(myCar.hello());//it will give a error
console.log(car.hello2(myCar));


