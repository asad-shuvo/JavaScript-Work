function retirement(retairmentAge){
    var a="left of the year";
    return function(dateOBirth){
        return `${retairmentAge-(2020-dateOBirth)} ${a}`;       
    }
}

let retirementUS=retirement(66);
console.log(retirementUS(1990));
