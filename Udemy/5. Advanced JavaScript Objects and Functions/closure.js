function interviewQuestior(job){
    var a="What subject do you teach? ";
    var b="What do you design? ";
    var c="What  do you do? ";
    if(job==='teacher'){
        return function(name){
            console.log(a+name);
        }
    }
    else if(job==='designer'){
        return function(name){
            console.log(b+name);
        }
    }
    else{
        return function(name){
            console.log(c+name);
        }
    }
}

var returnVal=interviewQuestior('teacher');
returnVal('john');

interviewQuestior('designer')('mark');
