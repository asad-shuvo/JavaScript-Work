const square = (val)=>{
    return val*val;
}

console.log(square(4,'hi',32));//It will still work


const minusOp=(a,b)=>{
    if(a==undefined)return -b;
    if(b==undefined)return -a;
    return Math.abs(a-b);
    
}

console.log(minusOp(10));
console.log(minusOp(20));
console.log(minusOp(10,20));

const minusOp2=(a,b=2)=>{
    if(a==undefined)return -b;
    if(b==undefined)return -a;
    return Math.abs(a-b);
    
}

console.log(minusOp2(10));
console.log(minusOp2(20));
console.log(minusOp2(10,20));