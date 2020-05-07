console.log(Object.getPrototypeOf({})== Object.prototype);
//True
console.log(Object.getPrototypeOf(Object.prototype));
//Null
console.log(Object.getPrototypeOf(Math.max) ==
            Function.prototype);
//  true
console.log(Object.getPrototypeOf([]) ==
            Array.prototype);
//  true

let protRabbit = {
    speak(line){
         console.log(`The ${this.type} rabbit says ${line}`);
    }
};

let killerRabbit=Object.create(protRabbit);
killerRabbit.type="Killer";
killerRabbit.speak("Hi i am killer rabbit :D");



let newObject=Object.create(high);
newObject=Object.create(low);

let ret=newObject.cal(50);
console.log(ret);

