var john={
  bill:[124,48,268,180,42],
    tip:[],
    totalBill:[],
    caltip:function(){
        for(var i=0;i<this.bill.length;i++){
          var x=this.bill[i];
            var calt,caltb;
            if(x<50){
                calt=x*0.2;
            }
            else if(x>=50 && x<=200){
                calt=x*.15;
            }
            else if(x>200){
                calt=x*.10;
            }
            this.tip.push(calt);
            this.totalBill.push(calt+x);
        }
    }
};
var mark={
  bill:[77,375,110,45],
    tip:[],
    totalBill:[],
    caltip:function(){
        for(var i=0;i<this.bill.length;i++){
          var x=this.bill[i];
            var calt,caltb;
            if(x<100){
                calt=x*0.2;
            }
            else if(x>=100 && x<=300){
                calt=x*.10;
            }
            else if(x>300){
                calt=x*.25;
            }
            this.tip.push(calt);
            this.totalBill.push(calt+x);
        }
    }
};
john.caltip();
mark.caltip();
function avgTip(tips){
    var sum=0;
    for(var i=0;i<tips.length;i++){
        sum+=tips[i];
    }
    return sum/tips.length;
}
var avgMark=avgTip(mark.tip);
var avgJohn=avgTip(john.tip);
console.log(avgMark);
console.log(avgJohn);
if(avgJohn>avgMark)console.log("John paid then mark");
else console.log("Mark paid more");