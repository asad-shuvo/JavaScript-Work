let s=Symbol("First symbol");
console.log(typeof s);
console.log(s.toString());

let s2=Symbol('test');
let s3=Symbol('test');

console.log(s2===s3);//False

let s4= Symbol.for('RegSymbol');

let s5 = Symbol.for('RegSymbol');

console.log(s4===s5);//True

console.log(Symbol.keyFor(s4));

let fname=Symbol();
let person={
    [fname]:"Chandler"
};

console.log(Object.getOwnPropertySymbols(person));

let sym=Symbol("name");
console.log(sym===Symbol("name"));

//Rabbit.prototype[sym]=55;
//console.log(blackRabbit[sym]);

const toStringSymbol=Symbol("toString");
Array.prototype[toStringSymbol]=function(){
    return `${this.length} cm of blue earn`;
};

console.log([1,2].toString());
console.log([1,2][toStringSymbol]());
const testSymbol=Symbol();
Array.prototype[testSymbol]=function(){
    return `${this.length+this.length}`;
}
console.log([1,2,3,4][testSymbol]());

let StringObject={
    [toStringSymbol](){
        return `a jute rope`;
    }
}
console.log(StringObject[toStringSymbol]());