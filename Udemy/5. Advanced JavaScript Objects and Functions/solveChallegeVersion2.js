(function(){
    
    var Question= function(question,answers,correctAnswers){
    this.question=question;
    this.answers=answers;
    this.correctAnswers=correctAnswers
}

var storeQuestions=[];
storeQuestions.push(new Question('What is the capital of BD? ',['Dhaka','Chittagong','cumilla'],'0'));
storeQuestions.push(new Question('What is the capital of India? ',['Mumbai','Dhulli','kolkata'],'1'));
storeQuestions.push(new Question('What is the capital of US? ',['DC','NY','florida'],'0'));




Question.prototype.displayQuestion=function(){
    console.log(this.question);
    for(var i=0;i<this.answers.length;i++){
        console.log(i+': '+this.answers[i]);
    }
}
Question.prototype.checkAns = function(givenAns,callBack){
    var sc;
    if(givenAns===this.correctAnswers){
        console.log("Its correct ans");
       sc= callBack(true);
    }
    else {
       sc=  callBack(false);
        console.log("Its not correct ans");
    }
    this.displayScore(sc);
}

Question.prototype.displayScore=function(score){
    console.log('Score is '+score);
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



function playAgain(){
var ans=Math.floor(Math.random()*storeQuestions.length);
console.log(ans);
storeQuestions[ans].displayQuestion();

var givenAns=prompt('What is the ans?');
    if(givenAns!=='exit'){
storeQuestions[ans].checkAns(givenAns,keepScore);
playAgain();
    }
}
    playAgain();
})();
   