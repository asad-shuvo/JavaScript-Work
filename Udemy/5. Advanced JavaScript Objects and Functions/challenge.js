(function(){
   var Question= function(ques,option,correctAnswer){
    this.ques=ques;
    this.option=option;
    this.correctAnswer=correctAnswer;
}


var Q=[];
var capBd=['0.Dhaka','1.Chittagong','2.Cumilla'];
var milkC=['0.black','1.white','2.green'];
var cowL=['0.one','1.two','2.three'];
var r1=new Question('What is the capital of BD?',capBd,'0');
var r2=new Question('What is the colour of milk?',milkC,'1');
var r3=new Question('How many leg a cow has?',cowL,'1');
Q.push(r1);
Q.push(r2);
Q.push(r3);
//console.log(Q);
Question.prototype.displayQuestion=function(){
    console.log(this.ques);
    
    for(var i=0;i<this.option.length;i++){
        console.log(i+' :'+this.option[i]);
    }
}
Question.prototype.checkAns=function(ans,callBack){
    var sc;
    if(ans===this.correctAnswer){
        console.log("Its a corret ans");
       sc =  callBack(true);
    
    }
    else {console.log("Its wrong");
          sc = callBack(false);}
    
    this.displayScore(sc);
}

Question.prototype.displayScore = 
    function(score){
    console.log("Score is "+score);
}

function score(){
    var sc=0;
    return function(correct){
        if(correct){
            sc++;
        }
        return sc;
    }
}

    
    var keepScore=score();
    

function nextQuestion(){
    rand=Math.floor(Math.random()*Q.length);
Q[rand].displayQuestion();
var ret=prompt(Q[rand].ques);

    if(ret!='exit'){
        Q[rand].checkAns(ret,keepScore); 
    nextQuestion();
    }
}
    nextQuestion();
 
    
})();


