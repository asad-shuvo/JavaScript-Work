class Animal{
    constructor(name,speed){
        this.speed=speed;
        this.name=name;
    }

    run(speed){
        this.speed=speed;
        console.log(`${this.name} runs with speed ${this.speed}.`);

    }
    stop(){
        this.speed=0;
        console.log(`${this.name} stands still.`);

    }
}

let animal= new Animal('cat');
animal.run(20);
animal.stop();

class Rabbit extends Animal{
//override
constructor(name, earlength){
    super(name);
    this.earlength=earlength;
}
stop(){
    console.log('Its overriden stop, pretty cool ha! '+this.earlength);
    
}

    hide(){
       console.log(`${this.name} is hiding`);
    }
}

let rabbit = new Rabbit('Rabbit',2);

rabbit.run(30);
rabbit.stop();
rabbit.hide();
