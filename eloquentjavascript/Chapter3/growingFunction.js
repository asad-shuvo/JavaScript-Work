function printFarmAnimal(num,name){
     num=String(num);
    while(num.length<3){
        num='0'+num;
    }
    console.log(`${num} ${name}`);
}

printFarmAnimal(10,'cows');
printFarmAnimal(1,'chicken');
printFarmAnimal(7,'duck');
printFarmAnimal(2,'sheep');


//Min

function Min(a,b){
    if(a<b)return a;
    else return b;
}
console.log(Min(10,12));

function isEven(num){
    if(num==0)return true;
    if(num===1 || num<0)return false;
    return isEven(num-2);
}

console.log(isEven(10));
console.log(isEven(15));
console.log(isEven(40));
console.log(isEven(10));

//One way
function countchar(str,chr){
    let cnt=0;
    for(let i=0;i<str.length;i++){
        if(str[i]===chr){
            cnt++;
        }
    }
    return cnt;
}
function countBS(chr){
    return countchar(chr,'B');
}
console.log(countBS('BBS'));
console.log(countBS('BBBH'));
console.log(countchar('BBS','S'));
console.log(countchar('KKKSk','K'));

//2nd way

function countchar2(str,chr='B'){
    let cnt=0;
    for(let i=0;i<str.length;i++){
        if(str[i]===chr){
            cnt++;
        }
    }
    return cnt;
}
console.log(countchar2('BBS'));
console.log(countchar2('BBBH'));
console.log(countchar2('BBS','S'));
console.log(countchar2('KKKSk','K'));
