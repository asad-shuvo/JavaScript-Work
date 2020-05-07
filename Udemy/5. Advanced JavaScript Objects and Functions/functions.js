//passing functions as arguments

var years = [1990, 1965, 1937, 2005, 1998];
function arryCalc(arr, fn){
    var arrRes=[];
    for(var i=0;i<arr.length;i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2020-el;
}

function isFullAge(el){
    return el>=18;
}

    var ages = arryCalc(years,calculateAge);
var fullAge = arryCalc(ages,isFullAge); 

console.log(ages);
console.log(fullAge);