let max=(hey,...numbers)=>{
    let mn=-Infinity;
    for(let num of numbers){
        if(num>mn){
            mn=num;
        }
    }
    console.log(hey);
//    console.log(hey2);
    return mn;
}
console.log(max(100,2,3,4,-1,10,9));