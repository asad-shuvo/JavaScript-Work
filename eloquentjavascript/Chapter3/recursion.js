function power(base,exponent){
    if(exponent==0)return 1;
    return base*power(base,exponent-1);
}

console.log(power(2,3));


function findTarget(target){
    function find(start,record){
        if(start==target)return record;
        
        else if(start>target)return null;
        
        return find(start+5,`(${record}+5)`)||find(start*3,`(${record}*3)`);
    }
    return find(1,'1');
}
console.log(findTarget(24));