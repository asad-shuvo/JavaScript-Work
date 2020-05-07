function speak(line){
    console.log(`The ${this.type} rabbit says ${line}`);
}

let whiteRabbit={type:"white",speak};
let hungryRabbit={type:"Hungry",speak};

whiteRabbit.speak("I am white rabbit");
hungryRabbit.speak("I am Hungry rabbit");

speak.call(whiteRabbit,"Hi i am white rabbit :D");//call function will take whiteRabbit object as an extra parameter



function noramlize(){
    console.log(this.Arr.map(n=>n/this.Len));
}

noramlize.call({Arr:[0,2,3],Len:5});