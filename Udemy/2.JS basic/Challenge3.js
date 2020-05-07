function tipCalculator(bill){
    if(bill<50){
        return bill*0.2;
    }
    else if(bill>=50 && bill<=200){
        return bill*0.15;
    }
    else if(bill>200){
        return bill*0.10;
    }
}
var tip=[];
var totalBill=[];
var tip1=tipCalculator(124);
tip.push(tip1);
totalBill.push(tip1+124);
var tip1=tipCalculator(48);
tip.push(tip1);
totalBill.push(tip1+48);
var tip1=tipCalculator(268);
tip.push(tip1);
totalBill.push(tip1+268);
console.log(tip);
console.log(totalBill);
