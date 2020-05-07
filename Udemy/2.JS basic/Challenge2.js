var avgScoreMike=(116+94+123)/3;
var avgScoreJohn=(89+120+103)/3;
var avgScoreMary=(97+134+105)/3;
var winner;
var score;
 if((avgScoreMike>avgScoreJohn)&&(avgScoreMike>avgScoreMary)){
    winner="Mike Team";
 score=avgScoreMike;   
}
else if((avgScoreJohn>avgScoreMike)&&(avgScoreJohn>avgScoreMary)){
    winner="John Team";
    score=avgScoreJohn;
}
else if((avgScoreMary>avgScoreJohn)&&(avgScoreMary>avgScoreMike)){
    winner="Mary Team";
    score=avgScoreMary;
}
else{
    winner="Its a draw";
    score=avgScoreJohn;
}
if(winner=="Its a draw")console.log("No one won");
else
console.log("Winner of the tournemnt is "+winner+" And the score is "+score);