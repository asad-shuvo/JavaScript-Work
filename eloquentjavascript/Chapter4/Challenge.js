let range=(start,end,step)=>{
    let arr=[];
    if(start>end){
        for(let i=start;i>=end;i-=step)
            arr.push(i);
    }
    else{
    for(let i=start;i<=end;i++){
        arr.push(i);
    }
    }
    return arr;
}

let arr=range(1,10,1);
// arr=range(5,1,1);
console.log(arr);

let sum=(ar)=>{
    let sum=0;
    for(let el of ar){
        sum+=el;
    }
    return sum;
}

console.log(sum(arr));

let reverse=(arr)=>{
    for(let i=0;i<arr.length/2;i++){
        arr[i]=arr[arr.length-i-1];
    }
    return arr;
}

console.log(arr);
console.log(reverse(arr));


//List
let arrayToList=(arr)=>{
    let list=null;
    for(let i=arr.length-1;i>=0;i--){
        list ={value:arr[i],
               rest:list};
    }
    return list;
}

let listToArray=(list)=>{
    let arr=[];
    for(let node=list;node;node=node.rest){
        arr.push(node.value);
    }
    return arr;
}

let nth=(list,n)=>{
    if(!list)return undefined;
    if(n==0)return list.value;
    return nth(list.rest,n-1);
}

let Lst=[1,2,3];
console.log(arrayToList(Lst));
console.log(Lst);
console.log(nth(Lst,1));


function deepEqual(a,b){
   if(a===b)return true;
    
    if(a==null || b==null || typeof a!='object' || typeof b!="object")return false;
    
    let keysA=Object.keys(a);
    let keysB=Object.keys(b);
    
    for(let key of keysA){
        if(!keysB.includes(key) || !deepEqual(a[key],b[key]))return false;
    }
    return true;
}
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));

console.log(deepEqual(obj, {here: 1, object: 2}));

console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
