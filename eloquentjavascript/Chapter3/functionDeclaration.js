function fun(){
    console.log("Hi this is like c++, right?");
}

fun();

//Arraow functio

const Power=(base,exponent)=>{
    let res=1;
    for(let i=0;i<exponent;i++){
        res*=base;
    }
    return res;
}

console.log(Power(2,10));

const P1=(x)=> {return x* x};//p1 and p is simillar
const P=(x)=>x*x;

console.log(P(10));
console.log(P1(10));

const noParameter=()=>{
    console.log('It has no parameter');
}
noParameter();